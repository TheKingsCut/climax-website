import { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';
import Vapi from '@vapi-ai/web';

const VapiButton = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [vapi, setVapi] = useState<Vapi | null>(null);

  useEffect(() => {
    const vapiInstance = new Vapi('096acd6b-0b19-4863-8cc3-b736305b05ff');
    setVapi(vapiInstance);

    // Event listeners
    vapiInstance.on('call-start', () => {
      console.log('Call started');
      setIsCallActive(true);
    });

    vapiInstance.on('call-end', () => {
      console.log('Call ended');
      setIsCallActive(false);
    });

    vapiInstance.on('message', (message) => {
      if (message.type === 'transcript') {
        console.log(`${message.role}: ${message.transcript}`);
      }
    });

    return () => {
      vapiInstance.stop();
    };
  }, []);

  const handleClick = () => {
    if (!vapi) return;

    if (isCallActive) {
      vapi.stop();
    } else {
      vapi.start('dffc7682-fdc0-473f-b558-ed04e5911ee1');
    }
  };

  return (
    <button
      onClick={handleClick}
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