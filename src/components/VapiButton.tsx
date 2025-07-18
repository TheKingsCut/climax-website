
import { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { useConversation } from '@11labs/react';

const VapiButton = () => {
  const [isRequestingPermission, setIsRequestingPermission] = useState(false);

  const conversation = useConversation({
    onConnect: () => {
      console.log('ElevenLabs conversation started');
    },
    onDisconnect: () => {
      console.log('ElevenLabs conversation ended');
    },
    onMessage: (message) => {
      console.log('ElevenLabs message:', message);
    },
    onError: (error) => {
      console.error('ElevenLabs conversation error:', error);
    }
  });

  // Request microphone permission on component mount
  useEffect(() => {
    const requestMicrophonePermission = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        console.log('Microphone permission granted');
      } catch (error) {
        console.error('Microphone permission denied:', error);
      }
    };

    requestMicrophonePermission();
  }, []);

  const handleClick = async () => {
    if (!conversation) return;

    if (conversation.status === 'connected') {
      await conversation.endSession();
    } else {
      setIsRequestingPermission(true);
      try {
        // Ensure microphone access before starting conversation
        await navigator.mediaDevices.getUserMedia({ audio: true });
        await conversation.startSession({ 
          agentId: 'agent_01k0f8rs42fgnt4963brpje8gq' 
        });
      } catch (error) {
        console.error('Failed to start conversation:', error);
      } finally {
        setIsRequestingPermission(false);
      }
    }
  };

  const isCallActive = conversation.status === 'connected';

  return (
    <button
      onClick={handleClick}
      disabled={isRequestingPermission}
      className="w-14 h-14 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 touch-target group flex items-center justify-center"
      aria-label={isCallActive ? "End voice chat" : "Start voice chat with Max"}
    >
      {isCallActive ? (
        <MicOff 
          size={24} 
          className="group-hover:scale-110 transition-transform duration-200" 
        />
      ) : (
        <Mic 
          size={24} 
          className="group-hover:scale-110 transition-transform duration-200" 
        />
      )}
    </button>
  );
};

export default VapiButton;
