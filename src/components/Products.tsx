import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Professional-grade environmental control systems engineered for reliability, efficiency, and 
            precise performance across diverse applications.
          </p>
        </div>

        {/* Product Categories */}
        <div className="space-y-20">
          
          {/* 1. Inverter Air Cooled MAX 5.0 Combo Series */}
          <div id="inverter-air-cooled" className="product-category">
            <h3 className="text-3xl font-bold text-foreground mb-8">Inverter Air Cooled MAX 5.0 Combo Series</h3>
            
            {/* Product Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/PRODUCTS/MAX%205/Cannabis_Farm_01.jpg"
                  alt="MAX 5.0 Combo Series - Cannabis Farm Application"
                  className="w-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/PRODUCTS/MAX%205/Max5_Front_01.jpg"
                  alt="MAX 5.0 Combo Series - Front View"
                  className="w-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/PRODUCTS/MAX%205/Max5_Installed_01.jpg"
                  alt="MAX 5.0 Combo Series - Installation View"
                  className="w-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Features & Benefits */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">Features & Benefits</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Outdoor installation ready with weather-resistant construction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Advanced inverter technology for precise temperature control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Energy-efficient operation with significant power savings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Quiet operation with advanced noise reduction technology</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Remote monitoring and control capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">CE certification and European engineering standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Modular design for easy maintenance and scalability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Advanced diagnostics for predictive maintenance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">Technical Specifications</h4>
              <div className="border border-gray-200 rounded bg-white" style={{height: '400px', overflow: 'auto'}}>
                <style dangerouslySetInnerHTML={{__html: `
                  .sticky-table {
                    border-collapse: separate;
                    border-spacing: 0;
                    width: 100%;
                    min-width: 1200px;
                  }
                  .sticky-table th {
                    position: sticky;
                    top: 0;
                    background: white;
                    z-index: 20;
                    border-bottom: 2px solid #e5e7eb;
                    border-right: 1px solid #e5e7eb;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                  }
                  .sticky-table td {
                    border-bottom: 1px solid #e5e7eb;
                    border-right: 1px solid #e5e7eb;
                  }
                  .sticky-table th:first-child,
                  .sticky-table td:first-child {
                    border-left: 1px solid #e5e7eb;
                  }
                  .sticky-table th:last-child,
                  .sticky-table td:last-child {
                    border-right: 1px solid #e5e7eb;
                  }
                  .compact-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    line-height: 1.2;
                    padding: 8px;
                  }
                  .model-number {
                    font-weight: 600;
                    font-size: 0.9em;
                  }
                  .series-name {
                    font-weight: 400;
                    font-size: 0.8em;
                    margin-top: 2px;
                  }
                `}} />
                <table className="sticky-table">
                  <thead>
                    <tr>
                      <th className="min-w-[200px] text-left p-4">Item</th>
                      <th className="min-w-[80px] text-center p-4">Unit</th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">7000</div>
                          <div className="series-name">PRO5</div>
                        </div>
                      </th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">9000</div>
                          <div className="series-name">PRO5</div>
                        </div>
                      </th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">10500</div>
                          <div className="series-name">PRO5</div>
                        </div>
                      </th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">15000</div>
                          <div className="series-name">PRO5</div>
                        </div>
                      </th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">17500</div>
                          <div className="series-name">PRO5</div>
                        </div>
                      </th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">21000</div>
                          <div className="series-name">PRO5</div>
                        </div>
                      </th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">26000</div>
                          <div className="series-name">PRO5</div>
                        </div>
                      </th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">30000</div>
                          <div className="series-name">PRO5</div>
                        </div>
                      </th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">35000</div>
                          <div className="series-name">PRO5</div>
                        </div>
                      </th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">70000</div>
                          <div className="series-name">PRO5</div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-medium p-4">Cooling Capacity</td>
                      <td className="text-center p-4">kW</td>
                      <td className="text-center p-4">7</td>
                      <td className="text-center p-4">9</td>
                      <td className="text-center p-4">10.5</td>
                      <td className="text-center p-4">15</td>
                      <td className="text-center p-4">17.5</td>
                      <td className="text-center p-4">21</td>
                      <td className="text-center p-4">26</td>
                      <td className="text-center p-4">30</td>
                      <td className="text-center p-4">35</td>
                      <td className="text-center p-4">70</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Dehumidification Capacity</td>
                      <td className="text-center p-4">L/D</td>
                      <td className="text-center p-4">178</td>
                      <td className="text-center p-4">224</td>
                      <td className="text-center p-4">261</td>
                      <td className="text-center p-4">396</td>
                      <td className="text-center p-4">462</td>
                      <td className="text-center p-4">549</td>
                      <td className="text-center p-4">679</td>
                      <td className="text-center p-4">792</td>
                      <td className="text-center p-4">927</td>
                      <td className="text-center p-4">1854</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Electrical Heater (Options)</td>
                      <td className="text-center p-4">kW</td>
                      <td className="text-center p-4">1×1.5</td>
                      <td className="text-center p-4">1×1.5</td>
                      <td className="text-center p-4">2×2.0</td>
                      <td className="text-center p-4">2×2.0</td>
                      <td className="text-center p-4">2×2.0</td>
                      <td className="text-center p-4">2×3.0</td>
                      <td className="text-center p-4">2×3.0</td>
                      <td className="text-center p-4">4×2.0</td>
                      <td className="text-center p-4">4×2.0</td>
                      <td className="text-center p-4">4×3.0</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Cooling Input Power</td>
                      <td className="text-center p-4">kW</td>
                      <td className="text-center p-4">1.95</td>
                      <td className="text-center p-4">2.5</td>
                      <td className="text-center p-4">2.91</td>
                      <td className="text-center p-4">4.15</td>
                      <td className="text-center p-4">4.84</td>
                      <td className="text-center p-4">5.8</td>
                      <td className="text-center p-4">7.18</td>
                      <td className="text-center p-4">8.25</td>
                      <td className="text-center p-4">9.63</td>
                      <td className="text-center p-4">19.3</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Heating Capacity (Heat pump type only)</td>
                      <td className="text-center p-4">kW</td>
                      <td className="text-center p-4">7.5</td>
                      <td className="text-center p-4">9.5</td>
                      <td className="text-center p-4">11</td>
                      <td className="text-center p-4">16.5</td>
                      <td className="text-center p-4">19.5</td>
                      <td className="text-center p-4">23</td>
                      <td className="text-center p-4">28</td>
                      <td className="text-center p-4">32.5</td>
                      <td className="text-center p-4">37.9</td>
                      <td className="text-center p-4">76</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Heating Input Power (Heat pump type only)</td>
                      <td className="text-center p-4">kW</td>
                      <td className="text-center p-4">2.08</td>
                      <td className="text-center p-4">2.6</td>
                      <td className="text-center p-4">3</td>
                      <td className="text-center p-4">4.5</td>
                      <td className="text-center p-4">5.18</td>
                      <td className="text-center p-4">6.27</td>
                      <td className="text-center p-4">7.6</td>
                      <td className="text-center p-4">8.8</td>
                      <td className="text-center p-4">10.3</td>
                      <td className="text-center p-4">20.66</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Rated Air Flow Volume</td>
                      <td className="text-center p-4">m³/h</td>
                      <td className="text-center p-4">1400</td>
                      <td className="text-center p-4">1800</td>
                      <td className="text-center p-4">2200</td>
                      <td className="text-center p-4">3300</td>
                      <td className="text-center p-4">3400</td>
                      <td className="text-center p-4">4200</td>
                      <td className="text-center p-4">5200</td>
                      <td className="text-center p-4">5600</td>
                      <td className="text-center p-4">6000</td>
                      <td className="text-center p-4">12300</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Max Static Pressure</td>
                      <td className="text-center p-4">Pa</td>
                      <td className="text-center p-4">30</td>
                      <td className="text-center p-4">30</td>
                      <td className="text-center p-4">40</td>
                      <td className="text-center p-4">40</td>
                      <td className="text-center p-4">50</td>
                      <td className="text-center p-4">50</td>
                      <td className="text-center p-4">60</td>
                      <td className="text-center p-4">60</td>
                      <td className="text-center p-4">60</td>
                      <td className="text-center p-4">100</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Compressor Type</td>
                      <td className="text-center p-4"></td>
                      <td className="text-center p-4">Rotary</td>
                      <td className="text-center p-4" colSpan={2}>Rotary/Scroll</td>
                      <td className="text-center p-4" colSpan={7}>Scroll</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Compressor Quantity</td>
                      <td className="text-center p-4">Quantity</td>
                      <td className="text-center p-4">1</td>
                      <td className="text-center p-4">1</td>
                      <td className="text-center p-4">1</td>
                      <td className="text-center p-4">1</td>
                      <td className="text-center p-4">1</td>
                      <td className="text-center p-4">1</td>
                      <td className="text-center p-4">1</td>
                      <td className="text-center p-4">1</td>
                      <td className="text-center p-4">1</td>
                      <td className="text-center p-4">2</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Power Supply</td>
                      <td className="text-center p-4"></td>
                      <td className="text-center p-4" colSpan={7}>220V/1P/50Hz</td>
                      <td className="text-center p-4" colSpan={3}>380V/3P/50Hz</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Refrigerant</td>
                      <td className="text-center p-4"></td>
                      <td className="text-center p-4" colSpan={10}>R417A / R410A</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Noise</td>
                      <td className="text-center p-4">dB(A)</td>
                      <td className="text-center p-4">46</td>
                      <td className="text-center p-4">48</td>
                      <td className="text-center p-4">50</td>
                      <td className="text-center p-4">54</td>
                      <td className="text-center p-4">56</td>
                      <td className="text-center p-4">58</td>
                      <td className="text-center p-4">60</td>
                      <td className="text-center p-4">62</td>
                      <td className="text-center p-4">64</td>
                      <td className="text-center p-4">68</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Net Dimension (L×W×H)</td>
                      <td className="text-center p-4">mm</td>
                      <td className="text-center p-4">650×540×1840</td>
                      <td className="text-center p-4">650×560×1840</td>
                      <td className="text-center p-4">700×575×1840</td>
                      <td className="text-center p-4">840×620×1840</td>
                      <td className="text-center p-4">920×645×1840</td>
                      <td className="text-center p-4">1220×690×1840</td>
                      <td className="text-center p-4">1400×760×1840</td>
                      <td className="text-center p-4">1520×820×1840</td>
                      <td className="text-center p-4">1680×880×1840</td>
                      <td className="text-center p-4">2100×1050×1840</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Net Weight</td>
                      <td className="text-center p-4">kg</td>
                      <td className="text-center p-4">135</td>
                      <td className="text-center p-4">162</td>
                      <td className="text-center p-4">180</td>
                      <td className="text-center p-4">225</td>
                      <td className="text-center p-4">250</td>
                      <td className="text-center p-4">285</td>
                      <td className="text-center p-4">340</td>
                      <td className="text-center p-4">385</td>
                      <td className="text-center p-4">425</td>
                      <td className="text-center p-4">750</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Packing Dimension (L×W×H)</td>
                      <td className="text-center p-4">mm</td>
                      <td className="text-center p-4">730×620×1990</td>
                      <td className="text-center p-4">780×655×1990</td>
                      <td className="text-center p-4">920×700×1990</td>
                      <td className="text-center p-4">1680×820×1990</td>
                      <td className="text-center p-4">2030×890×1840</td>
                      <td className="text-center p-4">1000×725×1990</td>
                      <td className="text-center p-4">1950×880×1990</td>
                      <td className="text-center p-4">1600×870×1990</td>
                      <td className="text-center p-4">1760×930×1990</td>
                      <td className="text-center p-4">2200×1100×1990</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Gross Weight</td>
                      <td className="text-center p-4">kg</td>
                      <td className="text-center p-4">155</td>
                      <td className="text-center p-4">182</td>
                      <td className="text-center p-4">200</td>
                      <td className="text-center p-4">250</td>
                      <td className="text-center p-4">275</td>
                      <td className="text-center p-4">320</td>
                      <td className="text-center p-4">370</td>
                      <td className="text-center p-4">420</td>
                      <td className="text-center p-4">450</td>
                      <td className="text-center p-4">825</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 2. Water Cooled Inverter MAX 5.0 Series */}
          <div id="water-cooled-inverter" className="product-category">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-3xl font-bold text-foreground">Inverter Water Cooled MAX 5.0 Combo Series</h3>
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            
            {/* Product Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/PRODUCTS/INV%20COMPONENTS/INVCOMP_FAN_01.jpg"
                  alt="Inverter Water Cooled MAX 5.0 - Fan Component"
                  className="w-full h-48 lg:h-64 object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/PRODUCTS/INV%20COMPONENTS/INVCOMP_COMPR_01.jpg"
                  alt="Inverter Water Cooled MAX 5.0 - Compressor Component"
                  className="w-full h-48 lg:h-64 object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/PRODUCTS/INV%20COMPONENTS/INVCOMP_Driver_01.jpg"
                  alt="Inverter Water Cooled MAX 5.0 - Driver Component"
                  className="w-full h-48 lg:h-64 object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/PRODUCTS/INV%20COMPONENTS/INVCOMP_CNTRL_SYS_01.jpg"
                  alt="Inverter Water Cooled MAX 5.0 - Control System Component"
                  className="w-full h-48 lg:h-64 object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Features & Benefits */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">Features & Benefits</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Free hot water generation while cooling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Superior energy efficiency with water-cooled condenser</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Precise temperature and humidity control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Compact indoor installation design</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Intelligent control with remote monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">European quality with CE certification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Low noise operation for sensitive environments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Advanced diagnostics and maintenance alerts</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">Technical Specifications</h4>
              <div className="border border-gray-200 rounded bg-white" style={{height: '400px', overflow: 'auto'}}>
                <style dangerouslySetInnerHTML={{__html: `
                  .water-cooled-table {
                    border-collapse: separate;
                    border-spacing: 0;
                    width: 100%;
                    min-width: 1200px;
                  }
                  .water-cooled-table th {
                    position: sticky;
                    top: 0;
                    background: white;
                    z-index: 20;
                    border-bottom: 2px solid #e5e7eb;
                    border-right: 1px solid #e5e7eb;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                  }
                  .water-cooled-table td {
                    border-bottom: 1px solid #e5e7eb;
                    border-right: 1px solid #e5e7eb;
                  }
                  .water-cooled-table th:first-child,
                  .water-cooled-table td:first-child {
                    border-left: 1px solid #e5e7eb;
                  }
                  .water-cooled-table th:last-child,
                  .water-cooled-table td:last-child {
                    border-right: 1px solid #e5e7eb;
                  }
                  .water-compact-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    line-height: 1.2;
                    padding: 8px;
                  }
                  .water-model-number {
                    font-weight: 600;
                    font-size: 0.9em;
                  }
                  .water-series-name {
                    font-weight: 400;
                    font-size: 0.8em;
                    margin-top: 2px;
                  }
                `}} />
                <table className="water-cooled-table">
                  <thead>
                    <tr>
                      <th className="min-w-[200px] text-left p-4">Item</th>
                      <th className="min-w-[80px] text-center p-4">Unit</th>
                      <th className="min-w-[120px] text-center">
                        <div className="water-compact-header">
                          <div className="water-model-number">6000</div>
                          <div className="water-series-name">PRO5 (INV)</div>
                        </div>
                      </th>
                      <th className="min-w-[120px] text-center">
                        <div className="water-compact-header">
                          <div className="water-model-number">10500</div>
                          <div className="water-series-name">PRO5 (1P) (INV)</div>
                        </div>
                      </th>
                      <th className="min-w-[120px] text-center">
                        <div className="water-compact-header">
                          <div className="water-model-number">10500</div>
                          <div className="water-series-name">PRO5 (3P) (INV)</div>
                        </div>
                      </th>
                      <th className="min-w-[120px] text-center">
                        <div className="water-compact-header">
                          <div className="water-model-number">16000</div>
                          <div className="water-series-name">PRO5 (INV)</div>
                        </div>
                      </th>
                      <th className="min-w-[120px] text-center">
                        <div className="water-compact-header">
                          <div className="water-model-number">30000</div>
                          <div className="water-series-name">PRO5 (INV)</div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-medium p-4">Cooling capacity</td>
                      <td className="text-center p-4">KW</td>
                      <td className="text-center p-4">6</td>
                      <td className="text-center p-4">10.5</td>
                      <td className="text-center p-4">10.5</td>
                      <td className="text-center p-4">16</td>
                      <td className="text-center p-4">30</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Rated input power</td>
                      <td className="text-center p-4">KW</td>
                      <td className="text-center p-4">1.11</td>
                      <td className="text-center p-4">1.93</td>
                      <td className="text-center p-4">1.93</td>
                      <td className="text-center p-4">2.92</td>
                      <td className="text-center p-4">5.43</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Electrical Heater</td>
                      <td className="text-center p-4">KW</td>
                      <td className="text-center p-4">2×1.5</td>
                      <td className="text-center p-4">2×2.0</td>
                      <td className="text-center p-4">2×2.0</td>
                      <td className="text-center p-4">2×2.0</td>
                      <td className="text-center p-4">3×3.0</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Dehumidification Capacity</td>
                      <td className="text-center p-4">l/h</td>
                      <td className="text-center p-4">2.2</td>
                      <td className="text-center p-4">3.4</td>
                      <td className="text-center p-4">6</td>
                      <td className="text-center p-4">8.6</td>
                      <td className="text-center p-4">12.2</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Power Supply</td>
                      <td className="text-center p-4"></td>
                      <td className="text-center p-4">220V/50Hz/1Ph</td>
                      <td className="text-center p-4">220V/50Hz/1Ph</td>
                      <td className="text-center p-4">380V/50Hz/3Ph</td>
                      <td className="text-center p-4">380V/50Hz/3Ph</td>
                      <td className="text-center p-4">380V/50Hz/3Ph</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Compressor Type</td>
                      <td className="text-center p-4"></td>
                      <td className="text-center p-4">Rotary</td>
                      <td className="text-center p-4">Rotary</td>
                      <td className="text-center p-4">Scroll</td>
                      <td className="text-center p-4">Scroll</td>
                      <td className="text-center p-4">Scroll</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Compressor Quantity</td>
                      <td className="text-center p-4">Qty</td>
                      <td className="text-center p-4">1</td>
                      <td className="text-center p-4">1</td>
                      <td className="text-center p-4">1</td>
                      <td className="text-center p-4">1</td>
                      <td className="text-center p-4">1</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Refrigerant</td>
                      <td className="text-center p-4"></td>
                      <td className="text-center p-4"></td>
                      <td className="text-center p-4">R410A</td>
                      <td className="text-center p-4">R410A</td>
                      <td className="text-center p-4">R410A</td>
                      <td className="text-center p-4">R410A</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Protection</td>
                      <td className="text-center p-4"></td>
                      <td className="text-center p-4">High/low pressure protection</td>
                      <td className="text-center p-4" colSpan={4}>High/low pressure protection, over-heat protection, over-current protection, water-break protection</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Air flow</td>
                      <td className="text-center p-4">m3/h</td>
                      <td className="text-center p-4">1200</td>
                      <td className="text-center p-4">2000</td>
                      <td className="text-center p-4">2000</td>
                      <td className="text-center p-4">2600</td>
                      <td className="text-center p-4">6000</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Power</td>
                      <td className="text-center p-4">W</td>
                      <td className="text-center p-4">100</td>
                      <td className="text-center p-4">275</td>
                      <td className="text-center p-4">275</td>
                      <td className="text-center p-4">450</td>
                      <td className="text-center p-4">1100</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Static pressure</td>
                      <td className="text-center p-4">Pa</td>
                      <td className="text-center p-4">30</td>
                      <td className="text-center p-4">40</td>
                      <td className="text-center p-4">40</td>
                      <td className="text-center p-4">40</td>
                      <td className="text-center p-4">40</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Cooling Water Flow</td>
                      <td className="text-center p-4">m3/h</td>
                      <td className="text-center p-4">0.25</td>
                      <td className="text-center p-4">0.32</td>
                      <td className="text-center p-4">0.32</td>
                      <td className="text-center p-4">0.5</td>
                      <td className="text-center p-4">1.2</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Cooling Water Flow (Connect chiller)</td>
                      <td className="text-center p-4">m3/h</td>
                      <td className="text-center p-4">1.4</td>
                      <td className="text-center p-4">2.4</td>
                      <td className="text-center p-4">2.4</td>
                      <td className="text-center p-4">3.4</td>
                      <td className="text-center p-4">7</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Cooling Water Pipe</td>
                      <td className="text-center p-4"></td>
                      <td className="text-center p-4">DN20</td>
                      <td className="text-center p-4">DN20</td>
                      <td className="text-center p-4">DN20</td>
                      <td className="text-center p-4">DN20</td>
                      <td className="text-center p-4">DN32</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Noise</td>
                      <td className="text-center p-4">dB(A)</td>
                      <td className="text-center p-4">50</td>
                      <td className="text-center p-4">58</td>
                      <td className="text-center p-4">58</td>
                      <td className="text-center p-4">58</td>
                      <td className="text-center p-4">62</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Net dimension (L×W×H)</td>
                      <td className="text-center p-4">mm</td>
                      <td className="text-center p-4">1068×644×475</td>
                      <td className="text-center p-4">1408×695×550</td>
                      <td className="text-center p-4">1408×695×550</td>
                      <td className="text-center p-4">1408×762×550</td>
                      <td className="text-center p-4">2170×1090×771</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Net weight</td>
                      <td className="text-center p-4">Kg</td>
                      <td className="text-center p-4">90</td>
                      <td className="text-center p-4">120</td>
                      <td className="text-center p-4">120</td>
                      <td className="text-center p-4">130</td>
                      <td className="text-center p-4">260</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 3. Air Cooled Chiller MAX 6.0 HFO Series */}
          <div id="air-cooled-chiller" className="product-category">
            <h3 className="text-3xl font-bold text-foreground mb-8">Air Cooled Chiller MAX 6.0 HFO Series</h3>
            
            {/* Product Images */}
            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/PRODUCTS/HFO/HFO_03.jpg"
                  alt="Air Cooled Chiller MAX 6.0 HFO Series"
                  className="w-full h-48 lg:h-64 object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Features & Benefits */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">Features & Benefits</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Eco-friendly HFO refrigerant with low GWP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">High-capacity cooling for large facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Modular design for easy scalability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Advanced diagnostics for predictive maintenance</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Robust outdoor installation capability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Energy-efficient operation with inverter technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Industrial-grade reliability and performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Remote monitoring and control systems</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">Technical Specifications</h4>
              <h4 className="text-lg font-medium text-foreground mb-4">Parameter (Single Speed/Double Speed Optional)</h4>
              <div className="border border-gray-200 rounded bg-white" style={{height: '400px', overflow: 'auto'}}>
                <style dangerouslySetInnerHTML={{__html: `
                  .sticky-table {
                    border-collapse: separate;
                    border-spacing: 0;
                    width: 100%;
                    min-width: 800px;
                  }
                  .sticky-table th {
                    position: sticky;
                    top: 0;
                    background: white;
                    z-index: 20;
                    border-bottom: 2px solid #e5e7eb;
                    border-right: 1px solid #e5e7eb;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                  }
                  .sticky-table td {
                    border-bottom: 1px solid #e5e7eb;
                    border-right: 1px solid #e5e7eb;
                  }
                  .sticky-table th:first-child,
                  .sticky-table td:first-child {
                    border-left: 1px solid #e5e7eb;
                  }
                  .sticky-table th:last-child,
                  .sticky-table td:last-child {
                    border-right: 1px solid #e5e7eb;
                  }
                  .compact-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    line-height: 1.2;
                    padding: 8px;
                  }
                  .model-number {
                    font-weight: 600;
                    font-size: 0.9em;
                  }
                `}} />
                <table className="sticky-table">
                  <thead>
                    <tr>
                      <th className="min-w-[120px] text-center p-4">Model</th>
                      <th className="min-w-[120px] text-center p-4">Air Volume</th>
                      <th className="min-w-[120px] text-center p-4">Input Power</th>
                      <th className="min-w-[120px] text-center p-4">Power</th>
                      <th className="min-w-[120px] text-center p-4">ESP</th>
                      <th className="min-w-[120px] text-center p-4">Noise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center p-4 font-medium">H-RP220</td>
                      <td className="text-center p-4">220 m3/h</td>
                      <td className="text-center p-4">220V/50Hz</td>
                      <td className="text-center p-4">35W</td>
                      <td className="text-center p-4">150 Pa</td>
                      <td className="text-center p-4">31 dB</td>
                    </tr>
                    <tr>
                      <td className="text-center p-4 font-medium">H-RP540</td>
                      <td className="text-center p-4">540 m3/h</td>
                      <td className="text-center p-4">220V/50Hz</td>
                      <td className="text-center p-4">75W</td>
                      <td className="text-center p-4">300 Pa</td>
                      <td className="text-center p-4">38 dB</td>
                    </tr>
                    <tr>
                      <td className="text-center p-4 font-medium">H-RP900</td>
                      <td className="text-center p-4">900 m3/h</td>
                      <td className="text-center p-4">220V/50Hz</td>
                      <td className="text-center p-4">130W</td>
                      <td className="text-center p-4">380 Pa</td>
                      <td className="text-center p-4">43 dB</td>
                    </tr>
                    <tr>
                      <td className="text-center p-4 font-medium">H-RP1450</td>
                      <td className="text-center p-4">1450 m3/h</td>
                      <td className="text-center p-4">220V/50Hz</td>
                      <td className="text-center p-4">225W</td>
                      <td className="text-center p-4">480 Pa</td>
                      <td className="text-center p-4">50 dB</td>
                    </tr>
                    <tr>
                      <td className="text-center p-4 font-medium">H-RP2900</td>
                      <td className="text-center p-4">2900 m3/h</td>
                      <td className="text-center p-4">220V/50Hz</td>
                      <td className="text-center p-4">320W</td>
                      <td className="text-center p-4">630 Pa</td>
                      <td className="text-center p-4">65 dB</td>
                    </tr>
                    <tr>
                      <td className="text-center p-4 font-medium">H-SQ450</td>
                      <td className="text-center p-4">450 m3/h</td>
                      <td className="text-center p-4">220V/50Hz</td>
                      <td className="text-center p-4">60W</td>
                      <td className="text-center p-4">150 Pa</td>
                      <td className="text-center p-4">32 dB</td>
                    </tr>
                    <tr>
                      <td className="text-center p-4 font-medium">H-SQ800</td>
                      <td className="text-center p-4">800 m3/h</td>
                      <td className="text-center p-4">220V/50Hz</td>
                      <td className="text-center p-4">150W</td>
                      <td className="text-center p-4">200 Pa</td>
                      <td className="text-center p-4">32 dB</td>
                    </tr>
                    <tr>
                      <td className="text-center p-4 font-medium">H-SQ1350</td>
                      <td className="text-center p-4">1350 m3/h</td>
                      <td className="text-center p-4">220V/50Hz</td>
                      <td className="text-center p-4">200W</td>
                      <td className="text-center p-4">250 Pa</td>
                      <td className="text-center p-4">39 dB</td>
                    </tr>
                    <tr>
                      <td className="text-center p-4 font-medium">H-SQ2500</td>
                      <td className="text-center p-4">2500 m3/h</td>
                      <td className="text-center p-4">220V/380V 50Hz</td>
                      <td className="text-center p-4">350W</td>
                      <td className="text-center p-4">300 Pa</td>
                      <td className="text-center p-4">48 dB</td>
                    </tr>
                    <tr>
                      <td className="text-center p-4 font-medium">H-SQ3000</td>
                      <td className="text-center p-4">3000 m3/h</td>
                      <td className="text-center p-4">220V/380V 50Hz</td>
                      <td className="text-center p-4">400W</td>
                      <td className="text-center p-4">400 Pa</td>
                      <td className="text-center p-4">48 dB</td>
                    </tr>
                    <tr>
                      <td className="text-center p-4 font-medium">H-SQ4000</td>
                      <td className="text-center p-4">4000 m3/h</td>
                      <td className="text-center p-4">220V/380V 50Hz</td>
                      <td className="text-center p-4">450W</td>
                      <td className="text-center p-4">450 Pa</td>
                      <td className="text-center p-4">50 dB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 4. CM-FAO2 Evaporative Cooler Series */}
          <div id="evaporative-coolers" className="product-category">
            <h3 className="text-3xl font-bold text-foreground mb-8">CM-FAO2 Evaporative Cooler Series</h3>
            
            {/* Product Images */}
            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/PRODUCTS/FA02/CM-FA02.jpeg"
                  alt="CM-FAO2 Evaporative Cooler Series"
                  className="w-full h-48 lg:h-64 object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Features & Benefits */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">Features & Benefits</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Energy-efficient evaporative cooling technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Natural air cooling with fresh outdoor air</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Low operating costs compared to traditional AC</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Environmentally friendly with no refrigerants</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Suitable for dry climate applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Simple installation and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Robust construction for industrial use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Variable speed control for optimal efficiency</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">Technical Specifications</h4>
              <div className="border border-gray-200 rounded bg-white" style={{height: '400px', overflow: 'auto'}}>
                <style dangerouslySetInnerHTML={{__html: `
                  .sticky-table {
                    border-collapse: separate;
                    border-spacing: 0;
                    width: 100%;
                    min-width: 800px;
                  }
                  .sticky-table th {
                    position: sticky;
                    top: 0;
                    background: white;
                    z-index: 20;
                    border-bottom: 2px solid #e5e7eb;
                    border-right: 1px solid #e5e7eb;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                  }
                  .sticky-table td {
                    border-bottom: 1px solid #e5e7eb;
                    border-right: 1px solid #e5e7eb;
                  }
                  .sticky-table th:first-child,
                  .sticky-table td:first-child {
                    border-left: 1px solid #e5e7eb;
                  }
                  .sticky-table th:last-child,
                  .sticky-table td:last-child {
                    border-right: 1px solid #e5e7eb;
                  }
                  .compact-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    line-height: 1.2;
                    padding: 8px;
                  }
                  .model-number {
                    font-weight: 600;
                    font-size: 0.9em;
                  }
                `}} />
                <table className="sticky-table">
                  <thead>
                    <tr>
                      <th className="min-w-[200px] text-left p-4">Specification</th>
                      <th className="min-w-[120px] text-center p-4">Unit</th>
                      <th className="min-w-[120px] text-center">
                        <div className="compact-header">
                          <div className="model-number">CMFAO2-50</div>
                        </div>
                      </th>
                      <th className="min-w-[120px] text-center">
                        <div className="compact-header">
                          <div className="model-number">CMFAO2-125</div>
                        </div>
                      </th>
                      <th className="min-w-[120px] text-center">
                        <div className="compact-header">
                          <div className="model-number">CMFAO2-250</div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-medium p-4">Power Supply</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">220V ~ 50/60Hz</td>
                      <td className="text-center p-4" colSpan={2}>3N ~ 380V 50/60Hz</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">USRT</td>
                      <td className="text-center p-4">RT</td>
                      <td className="text-center p-4">5</td>
                      <td className="text-center p-4">12.5</td>
                      <td className="text-center p-4">25</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Cooling Capacity</td>
                      <td className="text-center p-4">KW</td>
                      <td className="text-center p-4">17.5</td>
                      <td className="text-center p-4">43.75</td>
                      <td className="text-center p-4">87.5</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Air Flow</td>
                      <td className="text-center p-4">CFM</td>
                      <td className="text-center p-4">2500 (4250m³/h)</td>
                      <td className="text-center p-4">5000 (8500m³/h)</td>
                      <td className="text-center p-4">10000 (17000m³/h)</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Rated Input Power</td>
                      <td className="text-center p-4">KW</td>
                      <td className="text-center p-4">2.35</td>
                      <td className="text-center p-4">3.4</td>
                      <td className="text-center p-4">5.56</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Rated Input Current</td>
                      <td className="text-center p-4">A</td>
                      <td className="text-center p-4">10.7</td>
                      <td className="text-center p-4">6.1</td>
                      <td className="text-center p-4">10</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">External Static Pressure</td>
                      <td className="text-center p-4">Pa</td>
                      <td className="text-center p-4">120</td>
                      <td className="text-center p-4">300</td>
                      <td className="text-center p-4">350</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Water Consumption</td>
                      <td className="text-center p-4">L/H</td>
                      <td className="text-center p-4">40</td>
                      <td className="text-center p-4">100</td>
                      <td className="text-center p-4">185</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Water Pressure</td>
                      <td className="text-center p-4">Mpa</td>
                      <td className="text-center p-4" colSpan={3}>0.2 ~ 0.6</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Water Gap Spec</td>
                      <td className="text-center p-4">inch</td>
                      <td className="text-center p-4">3/4"</td>
                      <td className="text-center p-4">1"</td>
                      <td className="text-center p-4">1-1/4"</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Noise</td>
                      <td className="text-center p-4">dB(A)</td>
                      <td className="text-center p-4">≤70</td>
                      <td className="text-center p-4">≤80</td>
                      <td className="text-center p-4">≤85</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Protection Grade</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4" colSpan={3}>II</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Waterproof Class</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4" colSpan={3}>IPx4</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Net Weight</td>
                      <td className="text-center p-4">kg</td>
                      <td className="text-center p-4">265</td>
                      <td className="text-center p-4">500</td>
                      <td className="text-center p-4">880</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Gross Weight</td>
                      <td className="text-center p-4">kg</td>
                      <td className="text-center p-4">280</td>
                      <td className="text-center p-4">540</td>
                      <td className="text-center p-4">920</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Net Dimension (L×W×H)</td>
                      <td className="text-center p-4">mm</td>
                      <td className="text-center p-4">1240×1120×1185</td>
                      <td className="text-center p-4">1690×2283×1314</td>
                      <td className="text-center p-4">1690×2283×2300</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Packing Dimension (L×W×H)</td>
                      <td className="text-center p-4">mm</td>
                      <td className="text-center p-4">1260×1160×1210</td>
                      <td className="text-center p-4">1750×2343×1474</td>
                      <td className="text-center p-4">1750×2343×2460</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 5. Dehumidifier Series */}
          <div id="dehumidifiers" className="product-category">
            <h3 className="text-3xl font-bold text-foreground mb-8">Dehumidifier Series</h3>
            
            {/* Product Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/PRODUCTS/DEHUMIDIFIER/M_DHUMID_Floor_01.jpg"
                  alt="Dehumidifier - Floor Mounted Unit"
                  className="w-full h-48 lg:h-64 object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/PRODUCTS/DEHUMIDIFIER/Dehumidifier_Ceiling_01.jpg"
                  alt="Dehumidifier - Ceiling Mounted Unit"
                  className="w-full h-48 lg:h-64 object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Features & Benefits */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">Features & Benefits</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Floor Standing Type</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      <span className="text-muted-foreground">Portable design for flexible placement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      <span className="text-muted-foreground">Easy installation and maintenance access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      <span className="text-muted-foreground">Integrated condensate pump</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      <span className="text-muted-foreground">Digital humidity control display</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Ceiling Type</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      <span className="text-muted-foreground">Space-saving ceiling-mounted installation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      <span className="text-muted-foreground">Ducted air distribution capability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      <span className="text-muted-foreground">High-efficiency heat exchanger</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      <span className="text-muted-foreground">Remote control and monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Specifications - Floor Units */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">Floor Units</h4>
              <div className="border border-gray-200 rounded bg-white max-h-96 overflow-y-auto">
                <style dangerouslySetInnerHTML={{__html: `
                  .sticky-table {
                    border-collapse: separate;
                    border-spacing: 0;
                    width: 100%;
                    min-width: 1200px;
                  }
                  .sticky-table th {
                    position: sticky;
                    top: 0;
                    background: white;
                    z-index: 20;
                    border-bottom: 2px solid #e5e7eb;
                    border-right: 1px solid #e5e7eb;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                  }
                  .sticky-table td {
                    border-bottom: 1px solid #e5e7eb;
                    border-right: 1px solid #e5e7eb;
                  }
                  .sticky-table th:first-child,
                  .sticky-table td:first-child {
                    border-left: 1px solid #e5e7eb;
                  }
                  .sticky-table th:last-child,
                  .sticky-table td:last-child {
                    border-right: 1px solid #e5e7eb;
                  }
                  .compact-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    line-height: 1.2;
                    padding: 8px;
                  }
                  .model-number {
                    font-weight: 600;
                    font-size: 0.9em;
                  }
                  .series-name {
                    font-weight: 400;
                    font-size: 0.8em;
                    margin-top: 2px;
                  }
                `}} />
                <table className="sticky-table">
                  <thead>
                    <tr>
                      <th className="min-w-[200px] text-left p-4">Category</th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">CM-D138</div>
                          <div className="series-name">Floor</div>
                        </div>
                      </th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">CM-D156</div>
                          <div className="series-name">Floor</div>
                        </div>
                      </th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">CM-D380</div>
                          <div className="series-name">Floor</div>
                        </div>
                      </th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">CM-D720</div>
                          <div className="series-name">Floor</div>
                        </div>
                      </th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">CM-D960</div>
                          <div className="series-name">Floor</div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-medium p-4">Dehumidification Capacity</td>
                      <td className="text-center p-4">138 L/day</td>
                      <td className="text-center p-4">156 L/day</td>
                      <td className="text-center p-4">380 L/day</td>
                      <td className="text-center p-4">720 L/day</td>
                      <td className="text-center p-4">960 L/day</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Power Supply</td>
                      <td className="text-center p-4">220V/50Hz/1P</td>
                      <td className="text-center p-4">220V/50Hz/1P</td>
                      <td className="text-center p-4">380V/50Hz/3P</td>
                      <td className="text-center p-4">380V/50Hz/3P</td>
                      <td className="text-center p-4">380V/50Hz/3P</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Power</td>
                      <td className="text-center p-4">2 KW</td>
                      <td className="text-center p-4">2.3 KW</td>
                      <td className="text-center p-4">6.5 KW</td>
                      <td className="text-center p-4">16 KW</td>
                      <td className="text-center p-4">20 KW</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Humidity Regulation</td>
                      <td className="text-center p-4">10% - 95% RH</td>
                      <td className="text-center p-4">10% - 95% RH</td>
                      <td className="text-center p-4">10% - 95% RH</td>
                      <td className="text-center p-4">10% - 95% RH</td>
                      <td className="text-center p-4">10% - 95% RH</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Control Accuracy</td>
                      <td className="text-center p-4">±3% RH</td>
                      <td className="text-center p-4">±3% RH</td>
                      <td className="text-center p-4">±3% RH</td>
                      <td className="text-center p-4">±3% RH</td>
                      <td className="text-center p-4">±3% RH</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Proper Temperature</td>
                      <td className="text-center p-4">5~38℃</td>
                      <td className="text-center p-4">5~38℃</td>
                      <td className="text-center p-4">5~38℃</td>
                      <td className="text-center p-4">5~38℃</td>
                      <td className="text-center p-4">5~38℃</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Protection Level</td>
                      <td className="text-center p-4">IPX04</td>
                      <td className="text-center p-4">IPX04</td>
                      <td className="text-center p-4">IPX04</td>
                      <td className="text-center p-4">IPX04</td>
                      <td className="text-center p-4">IPX04</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Application Area</td>
                      <td className="text-center p-4">150-200m2 (2.8m high)</td>
                      <td className="text-center p-4">100-260m2 (2.8m high)</td>
                      <td className="text-center p-4">400-600m2 (2.8m high)</td>
                      <td className="text-center p-4">700-1000m2 (2.8m high)</td>
                      <td className="text-center p-4">900-1300m2 (2.8m high)</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Dimensions (L*W*H)</td>
                      <td className="text-center p-4">480*420*1050 mm</td>
                      <td className="text-center p-4">480*420*1050 mm</td>
                      <td className="text-center p-4">1180*470*1790 mm</td>
                      <td className="text-center p-4">1200*700*1790 mm</td>
                      <td className="text-center p-4">1380*700*2000 mm</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Air Flow</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Technical Specifications - Ceiling Units */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">Ceiling Units</h4>
              <div className="border border-gray-200 rounded bg-white max-h-96 overflow-y-auto">
                <table className="sticky-table">
                  <thead>
                    <tr>
                      <th className="min-w-[200px] text-left p-4">Category</th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">CM-DE136</div>
                          <div className="series-name">Ceiling</div>
                        </div>
                      </th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">CM-DE168</div>
                          <div className="series-name">Ceiling</div>
                        </div>
                      </th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">CM-DE240</div>
                          <div className="series-name">Ceiling</div>
                        </div>
                      </th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">CM-DE360</div>
                          <div className="series-name">Ceiling</div>
                        </div>
                      </th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">CM-DE480</div>
                          <div className="series-name">Ceiling</div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-medium p-4">Dehumidification Capacity</td>
                      <td className="text-center p-4">136.8 L/day</td>
                      <td className="text-center p-4">168 L/day</td>
                      <td className="text-center p-4">240 L/day</td>
                      <td className="text-center p-4">360 L/day</td>
                      <td className="text-center p-4">480 L/day</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Power Supply</td>
                      <td className="text-center p-4">220V/50Hz/1P</td>
                      <td className="text-center p-4">380V/50Hz/3P</td>
                      <td className="text-center p-4">380V/50Hz/3P</td>
                      <td className="text-center p-4">380V/50Hz/3P</td>
                      <td className="text-center p-4">380V/50Hz/3P</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Power</td>
                      <td className="text-center p-4">2.5 KW</td>
                      <td className="text-center p-4">3.0 KW</td>
                      <td className="text-center p-4">5.0 KW</td>
                      <td className="text-center p-4">6.5 KW</td>
                      <td className="text-center p-4">10 KW</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Humidity Regulation</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">10% - 95%RH</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Control Accuracy</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">±1% RH</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Proper Temperature</td>
                      <td className="text-center p-4">5~38℃</td>
                      <td className="text-center p-4">5~38℃</td>
                      <td className="text-center p-4">5~38℃</td>
                      <td className="text-center p-4">5~38℃</td>
                      <td className="text-center p-4">5~38℃</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Protection Level</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Application Area</td>
                      <td className="text-center p-4">150-200m2 (2.8m high)</td>
                      <td className="text-center p-4">200-300m2 (2.8m high)</td>
                      <td className="text-center p-4">300-500m2 (2.8m high)</td>
                      <td className="text-center p-4">400-600m2 (2.8m high)</td>
                      <td className="text-center p-4">500-800m2 (2.8m high)</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Dimensions (L*W*H)</td>
                      <td className="text-center p-4">900*500*430 mm</td>
                      <td className="text-center p-4">1000*600*700 mm</td>
                      <td className="text-center p-4">1000*800*750 mm</td>
                      <td className="text-center p-4">1200*1100*700 mm</td>
                      <td className="text-center p-4">1200*1100*700 mm</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Air Flow</td>
                      <td className="text-center p-4">1300m3/h</td>
                      <td className="text-center p-4">2800m3/h</td>
                      <td className="text-center p-4">3000m3/h</td>
                      <td className="text-center p-4">4000m3/h</td>
                      <td className="text-center p-4">6000m3/h</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 6. Ultrasonic Humidifier Series */}
          <div id="humidifiers" className="product-category">
            <h3 className="text-3xl font-bold text-foreground mb-8">Ultrasonic Humidifier Series</h3>
            
            {/* Product Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/PRODUCTS/HUMIDIFIER/Ultrasonic_02.jpg"
                  alt="Ultrasonic Humidifier - Professional Ultrasonic Unit"
                  className="w-full h-48 lg:h-64 object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/PRODUCTS/HUMIDIFIER/Humidifier_01.jpg"
                  alt="Ultrasonic Humidifier - Large Capacity Industrial System"
                  className="w-full h-48 lg:h-64 object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Features & Benefits */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">Features & Benefits</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Wide humidification capacity range from 1.6kg/h to 18kg/h for diverse applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Coverage area from 10m² to 200m² with precise humidity control (10%-99%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Advanced ultrasonic atomization technology with 99% atomization efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Ultra-fine water mist particles (1-5 microns) for uniform humidification</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Exceptional energy efficiency - only 0.06kW per 1kg water atomization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Dedicated waterproof fan with delay function prevents mist backflow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Direct water pipe connection with automatic level adjustment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Prevents plant decay and germ breeding through condensation rejection</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">Technical Specifications</h4>
              <div className="border border-gray-200 rounded bg-white max-h-96 overflow-y-auto">
                <table className="sticky-table">
                  <thead>
                    <tr>
                      <th className="min-w-[200px] text-left p-4">Item</th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">CMD-UH16</div>
                        </div>
                      </th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">CMD-UH60</div>
                        </div>
                      </th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">CMD-UH120</div>
                        </div>
                      </th>
                      <th className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">CMD-UH180</div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-medium p-4">Humidification Capacity (kg/h)</td>
                      <td className="text-center p-4">1.6</td>
                      <td className="text-center p-4">6</td>
                      <td className="text-center p-4">12</td>
                      <td className="text-center p-4">18</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Application Area</td>
                      <td className="text-center p-4">Within 25 m²</td>
                      <td className="text-center p-4">50~70 m²</td>
                      <td className="text-center p-4">120~150 m²</td>
                      <td className="text-center p-4">170~200 m²</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Power (kW)</td>
                      <td className="text-center p-4">0.12</td>
                      <td className="text-center p-4">0.6</td>
                      <td className="text-center p-4">1.2</td>
                      <td className="text-center p-4">1.8</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Spray Jet</td>
                      <td className="text-center p-4">1</td>
                      <td className="text-center p-4">1</td>
                      <td className="text-center p-4">2</td>
                      <td className="text-center p-4">3</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Control Method</td>
                      <td className="text-center p-4">Automatic/Manual Control Switch</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                    </tr>
                    <tr>
                      <td className="font-medium p-4">Dimensions (mm)</td>
                      <td className="text-center p-4">605×405×250</td>
                      <td className="text-center p-4">540×330×440</td>
                      <td className="text-center p-4">640×420×500</td>
                      <td className="text-center p-4">640×640×500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 7. Integrated PLC Control System */}
          <div id="plc-control-system" className="product-category">
            <h3 className="text-3xl font-bold text-foreground mb-8">Integrated PLC Control System</h3>
            
            {/* Product Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
                  alt="Integrated PLC Control System - Circuit Board"
                  className="w-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
                  alt="Integrated PLC Control System - Programming Interface"
                  className="w-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop"
                  alt="Integrated PLC Control System - Control Interface"
                  className="w-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop"
                  alt="Integrated PLC Control System - Touch Screen Interface"
                  className="w-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Features & Benefits */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">Features & Benefits</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Premium Siemens PLC and touch screen technology for centralized control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Schneider contactors ensuring reliable power distribution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Modbus RTU communication for seamless device integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Ethernet connectivity for PLC, touch screen, and computer integration</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Multi-level control operation: panel, touch screen, and computer software</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Transparent working principles for simplified integration and support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Enhanced precision in planting management for consistent product quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Cost-effective solution promoting smart vertical agriculture advancement</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* System Components */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">System Components & Connectivity</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-semibold text-foreground mb-3">Connected Devices</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></span>
                      <span className="text-muted-foreground">Planting air conditioner units</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></span>
                      <span className="text-muted-foreground">Water fertilizer machine systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></span>
                      <span className="text-muted-foreground">CO2 monitoring and control equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></span>
                      <span className="text-muted-foreground">Planting rack LED lighting systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></span>
                      <span className="text-muted-foreground">Ventilation fan control</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></span>
                      <span className="text-muted-foreground">UV sterilization lamp management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></span>
                      <span className="text-muted-foreground">Oxygen supply pump systems</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-3">Control Options</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2"></span>
                      <span className="text-muted-foreground">Control cabinet panel operation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2"></span>
                      <span className="text-muted-foreground">Touch screen interface control</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2"></span>
                      <span className="text-muted-foreground">Computer configuration software</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <h5 className="font-semibold text-foreground mb-3">Key Advantages</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                        <span className="text-muted-foreground">Simplified procurement and technical support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                        <span className="text-muted-foreground">Transparent system architecture and connectivity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                        <span className="text-muted-foreground">Streamlined integration for vertical farming operations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;