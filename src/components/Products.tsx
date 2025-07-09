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
          <div className="product-category">
            <h3 className="text-3xl font-bold text-foreground mb-8">Inverter Air Cooled MAX 5.0 Combo Series</h3>
            
            {/* Product Image Placeholder */}
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-8">
              <div className="text-muted-foreground text-lg">Product Image Placeholder</div>
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
              <div className="overflow-x-auto">
                <style dangerouslySetInnerHTML={{__html: `
                  .spec-table {
                    border-collapse: separate;
                    border-spacing: 0;
                  }
                  .spec-table td,
                  .spec-table th {
                    border-right: 1px solid #e5e7eb;
                    border-bottom: 1px solid #e5e7eb;
                  }
                  .spec-table th:first-child,
                  .spec-table td:first-child {
                    border-left: 1px solid #e5e7eb;
                  }
                  .spec-table thead tr:first-child th {
                    border-top: 1px solid #e5e7eb;
                  }
                  .spec-table thead {
                    position: sticky;
                    top: 0;
                    z-index: 10;
                    background: white;
                  }
                  .compact-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    line-height: 1.2;
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
                <Table className="spec-table">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="min-w-[200px] text-left">Item</TableHead>
                      <TableHead className="min-w-[80px] text-center">Unit</TableHead>
                      <TableHead className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">7000</div>
                          <div className="series-name">PRO5</div>
                        </div>
                      </TableHead>
                      <TableHead className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">9000</div>
                          <div className="series-name">PRO5</div>
                        </div>
                      </TableHead>
                      <TableHead className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">10500</div>
                          <div className="series-name">PRO5</div>
                        </div>
                      </TableHead>
                      <TableHead className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">15000</div>
                          <div className="series-name">PRO5</div>
                        </div>
                      </TableHead>
                      <TableHead className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">17500</div>
                          <div className="series-name">PRO5</div>
                        </div>
                      </TableHead>
                      <TableHead className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">21000</div>
                          <div className="series-name">PRO5</div>
                        </div>
                      </TableHead>
                      <TableHead className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">26000</div>
                          <div className="series-name">PRO5</div>
                        </div>
                      </TableHead>
                      <TableHead className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">30000</div>
                          <div className="series-name">PRO5</div>
                        </div>
                      </TableHead>
                      <TableHead className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">35000</div>
                          <div className="series-name">PRO5</div>
                        </div>
                      </TableHead>
                      <TableHead className="min-w-[100px] text-center">
                        <div className="compact-header">
                          <div className="model-number">70000</div>
                          <div className="series-name">PRO5</div>
                        </div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Cooling Capacity</TableCell>
                      <TableCell className="text-center">kW</TableCell>
                      <TableCell className="text-center">7</TableCell>
                      <TableCell className="text-center">9</TableCell>
                      <TableCell className="text-center">10.5</TableCell>
                      <TableCell className="text-center">15</TableCell>
                      <TableCell className="text-center">17.5</TableCell>
                      <TableCell className="text-center">21</TableCell>
                      <TableCell className="text-center">26</TableCell>
                      <TableCell className="text-center">30</TableCell>
                      <TableCell className="text-center">35</TableCell>
                      <TableCell className="text-center">70</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Dehumidification Capacity</TableCell>
                      <TableCell className="text-center">L/D</TableCell>
                      <TableCell className="text-center">178</TableCell>
                      <TableCell className="text-center">224</TableCell>
                      <TableCell className="text-center">261</TableCell>
                      <TableCell className="text-center">396</TableCell>
                      <TableCell className="text-center">462</TableCell>
                      <TableCell className="text-center">549</TableCell>
                      <TableCell className="text-center">679</TableCell>
                      <TableCell className="text-center">792</TableCell>
                      <TableCell className="text-center">927</TableCell>
                      <TableCell className="text-center">1854</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Electrical Heater (Options)</TableCell>
                      <TableCell className="text-center">kW</TableCell>
                      <TableCell className="text-center">1×1.5</TableCell>
                      <TableCell className="text-center">1×1.5</TableCell>
                      <TableCell className="text-center">2×2.0</TableCell>
                      <TableCell className="text-center">2×2.0</TableCell>
                      <TableCell className="text-center">2×2.0</TableCell>
                      <TableCell className="text-center">2×3.0</TableCell>
                      <TableCell className="text-center">2×3.0</TableCell>
                      <TableCell className="text-center">4×2.0</TableCell>
                      <TableCell className="text-center">4×2.0</TableCell>
                      <TableCell className="text-center">4×3.0</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Cooling Input Power</TableCell>
                      <TableCell className="text-center">kW</TableCell>
                      <TableCell className="text-center">1.95</TableCell>
                      <TableCell className="text-center">2.5</TableCell>
                      <TableCell className="text-center">2.91</TableCell>
                      <TableCell className="text-center">4.15</TableCell>
                      <TableCell className="text-center">4.84</TableCell>
                      <TableCell className="text-center">5.8</TableCell>
                      <TableCell className="text-center">7.18</TableCell>
                      <TableCell className="text-center">8.25</TableCell>
                      <TableCell className="text-center">9.63</TableCell>
                      <TableCell className="text-center">19.3</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Heating Capacity (Heat pump type only)</TableCell>
                      <TableCell className="text-center">kW</TableCell>
                      <TableCell className="text-center">7.5</TableCell>
                      <TableCell className="text-center">9.5</TableCell>
                      <TableCell className="text-center">11</TableCell>
                      <TableCell className="text-center">16.5</TableCell>
                      <TableCell className="text-center">19.5</TableCell>
                      <TableCell className="text-center">23</TableCell>
                      <TableCell className="text-center">28</TableCell>
                      <TableCell className="text-center">32.5</TableCell>
                      <TableCell className="text-center">37.9</TableCell>
                      <TableCell className="text-center">76</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Heating Input Power (Heat pump type only)</TableCell>
                      <TableCell className="text-center">kW</TableCell>
                      <TableCell className="text-center">2.08</TableCell>
                      <TableCell className="text-center">2.6</TableCell>
                      <TableCell className="text-center">3</TableCell>
                      <TableCell className="text-center">4.5</TableCell>
                      <TableCell className="text-center">5.18</TableCell>
                      <TableCell className="text-center">6.27</TableCell>
                      <TableCell className="text-center">7.6</TableCell>
                      <TableCell className="text-center">8.8</TableCell>
                      <TableCell className="text-center">10.3</TableCell>
                      <TableCell className="text-center">20.66</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Rated Air Flow Volume</TableCell>
                      <TableCell className="text-center">m³/h</TableCell>
                      <TableCell className="text-center">1400</TableCell>
                      <TableCell className="text-center">1800</TableCell>
                      <TableCell className="text-center">2200</TableCell>
                      <TableCell className="text-center">3300</TableCell>
                      <TableCell className="text-center">3400</TableCell>
                      <TableCell className="text-center">4200</TableCell>
                      <TableCell className="text-center">5200</TableCell>
                      <TableCell className="text-center">5600</TableCell>
                      <TableCell className="text-center">6000</TableCell>
                      <TableCell className="text-center">12300</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Max Static Pressure</TableCell>
                      <TableCell className="text-center">Pa</TableCell>
                      <TableCell className="text-center">30</TableCell>
                      <TableCell className="text-center">30</TableCell>
                      <TableCell className="text-center">40</TableCell>
                      <TableCell className="text-center">40</TableCell>
                      <TableCell className="text-center">50</TableCell>
                      <TableCell className="text-center">50</TableCell>
                      <TableCell className="text-center">60</TableCell>
                      <TableCell className="text-center">60</TableCell>
                      <TableCell className="text-center">60</TableCell>
                      <TableCell className="text-center">100</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Compressor Type</TableCell>
                      <TableCell className="text-center"></TableCell>
                      <TableCell className="text-center">Rotary</TableCell>
                      <TableCell className="text-center" colSpan={2}>Rotary/Scroll</TableCell>
                      <TableCell className="text-center" colSpan={7}>Scroll</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Compressor Quantity</TableCell>
                      <TableCell className="text-center">Quantity</TableCell>
                      <TableCell className="text-center">1</TableCell>
                      <TableCell className="text-center">1</TableCell>
                      <TableCell className="text-center">1</TableCell>
                      <TableCell className="text-center">1</TableCell>
                      <TableCell className="text-center">1</TableCell>
                      <TableCell className="text-center">1</TableCell>
                      <TableCell className="text-center">1</TableCell>
                      <TableCell className="text-center">1</TableCell>
                      <TableCell className="text-center">1</TableCell>
                      <TableCell className="text-center">2</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Condenser/Evaporator</TableCell>
                      <TableCell className="text-center"></TableCell>
                      <TableCell className="text-center" colSpan={10}>Hydrophilic Blue Fin; Innergroover tube type</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Power Supply</TableCell>
                      <TableCell className="text-center"></TableCell>
                      <TableCell className="text-center" colSpan={2}>220V/1P/50Hz</TableCell>
                      <TableCell className="text-center" colSpan={8}>380V/3P/50Hz</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Refrigerant</TableCell>
                      <TableCell className="text-center"></TableCell>
                      <TableCell className="text-center" colSpan={10}>R417A / R410A</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Noise</TableCell>
                      <TableCell className="text-center">dB(A)</TableCell>
                      <TableCell className="text-center">46</TableCell>
                      <TableCell className="text-center">48</TableCell>
                      <TableCell className="text-center">50</TableCell>
                      <TableCell className="text-center">54</TableCell>
                      <TableCell className="text-center">56</TableCell>
                      <TableCell className="text-center">58</TableCell>
                      <TableCell className="text-center">60</TableCell>
                      <TableCell className="text-center">62</TableCell>
                      <TableCell className="text-center">62</TableCell>
                      <TableCell className="text-center">70</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Net Dimension (L×W×H)</TableCell>
                      <TableCell className="text-center">mm</TableCell>
                      <TableCell className="text-center">650×540×1840</TableCell>
                      <TableCell className="text-center">650×560×1840</TableCell>
                      <TableCell className="text-center">700×575×1840</TableCell>
                      <TableCell className="text-center">840×620×1840</TableCell>
                      <TableCell className="text-center">920×645×1840</TableCell>
                      <TableCell className="text-center">1220×690×1840</TableCell>
                      <TableCell className="text-center">1400×760×1840</TableCell>
                      <TableCell className="text-center">1650×1270×1365</TableCell>
                      <TableCell className="text-center">1650×1270×1365</TableCell>
                      <TableCell className="text-center">2530×1993×1130</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Net Weight</TableCell>
                      <TableCell className="text-center">kg</TableCell>
                      <TableCell className="text-center">135</TableCell>
                      <TableCell className="text-center">162</TableCell>
                      <TableCell className="text-center">180</TableCell>
                      <TableCell className="text-center">225</TableCell>
                      <TableCell className="text-center">250</TableCell>
                      <TableCell className="text-center">285</TableCell>
                      <TableCell className="text-center">340</TableCell>
                      <TableCell className="text-center">380</TableCell>
                      <TableCell className="text-center">400</TableCell>
                      <TableCell className="text-center">760</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Packing Dimension (L×W×H)</TableCell>
                      <TableCell className="text-center">mm</TableCell>
                      <TableCell className="text-center">730×620×1990</TableCell>
                      <TableCell className="text-center">780×655×1990</TableCell>
                      <TableCell className="text-center">920×700×1990</TableCell>
                      <TableCell className="text-center">1680×820×1990</TableCell>
                      <TableCell className="text-center">2030×890×1840</TableCell>
                      <TableCell className="text-center">1000×725×1990</TableCell>
                      <TableCell className="text-center">1950×880×1990</TableCell>
                      <TableCell className="text-center">2030×880×1990</TableCell>
                      <TableCell className="text-center">1730×1350×1515</TableCell>
                      <TableCell className="text-center">2610×2073×1280</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Gross Weight</TableCell>
                      <TableCell className="text-center">kg</TableCell>
                      <TableCell className="text-center">155</TableCell>
                      <TableCell className="text-center">182</TableCell>
                      <TableCell className="text-center">200</TableCell>
                      <TableCell className="text-center">250</TableCell>
                      <TableCell className="text-center">275</TableCell>
                      <TableCell className="text-center">320</TableCell>
                      <TableCell className="text-center">370</TableCell>
                      <TableCell className="text-center">420</TableCell>
                      <TableCell className="text-center">450</TableCell>
                      <TableCell className="text-center">825</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          {/* 2. Water Cooled Inverter MAX 5.0 Series */}
          <div className="product-category">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-3xl font-bold text-foreground">Water Cooled Inverter MAX 5.0 Series</h3>
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            
            {/* Product Image Placeholder */}
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-8">
              <div className="text-muted-foreground text-lg">Product Image Placeholder</div>
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
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="min-w-[120px]">Model</TableHead>
                      <TableHead className="min-w-[100px]">Cooling Capacity (kW)</TableHead>
                      <TableHead className="min-w-[120px]">Dehumidification Capacity (L/D)</TableHead>
                      <TableHead className="min-w-[120px]">Electrical Heater (Options) (kW)</TableHead>
                      <TableHead className="min-w-[100px]">Cooling Input Power (kW)</TableHead>
                      <TableHead className="min-w-[120px]">Heating Capacity (Heat pump type only) (kW)</TableHead>
                      <TableHead className="min-w-[120px]">Heating Input Power (Heat pump type only) (kW)</TableHead>
                      <TableHead className="min-w-[120px]">Rated Air Flow Volume (m³/h)</TableHead>
                      <TableHead className="min-w-[100px]">Max Static Pressure (Pa)</TableHead>
                      <TableHead className="min-w-[100px]">Compressor Type</TableHead>
                      <TableHead className="min-w-[100px]">Compressor Quantity</TableHead>
                      <TableHead className="min-w-[120px]">Condenser/Evaporator</TableHead>
                      <TableHead className="min-w-[100px]">Power Supply</TableHead>
                      <TableHead className="min-w-[80px]">Refrigerant</TableHead>
                      <TableHead className="min-w-[80px]">Noise dB(A)</TableHead>
                      <TableHead className="min-w-[150px]">Net Dimension (L×W×H) (mm)</TableHead>
                      <TableHead className="min-w-[100px]">Net Weight (kg)</TableHead>
                      <TableHead className="min-w-[150px]">Packing Dimension (L×W×H) (mm)</TableHead>
                      <TableHead className="min-w-[100px]">Gross Weight (kg)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">6000 PRO5 (INV)</TableCell>
                      <TableCell>6.0</TableCell>
                      <TableCell>144</TableCell>
                      <TableCell>3/6/9</TableCell>
                      <TableCell>2.1</TableCell>
                      <TableCell>6.9</TableCell>
                      <TableCell>2.4</TableCell>
                      <TableCell>2100</TableCell>
                      <TableCell>250</TableCell>
                      <TableCell>Scroll</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>Fin & Tube</TableCell>
                      <TableCell>3Ph/380V/50Hz</TableCell>
                      <TableCell>R410A</TableCell>
                      <TableCell>55</TableCell>
                      <TableCell>1000×700×950</TableCell>
                      <TableCell>120</TableCell>
                      <TableCell>1140×840×1090</TableCell>
                      <TableCell>135</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">10500 PRO5 (1P) (INV)</TableCell>
                      <TableCell>10.5</TableCell>
                      <TableCell>252</TableCell>
                      <TableCell>3/6/9</TableCell>
                      <TableCell>3.7</TableCell>
                      <TableCell>12.1</TableCell>
                      <TableCell>4.3</TableCell>
                      <TableCell>3700</TableCell>
                      <TableCell>300</TableCell>
                      <TableCell>Scroll</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>Fin & Tube</TableCell>
                      <TableCell>1Ph/220V/50Hz</TableCell>
                      <TableCell>R410A</TableCell>
                      <TableCell>58</TableCell>
                      <TableCell>1200×800×1050</TableCell>
                      <TableCell>145</TableCell>
                      <TableCell>1340×940×1190</TableCell>
                      <TableCell>160</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">10500 PRO5 (3P) (INV)</TableCell>
                      <TableCell>10.5</TableCell>
                      <TableCell>252</TableCell>
                      <TableCell>3/6/9</TableCell>
                      <TableCell>3.7</TableCell>
                      <TableCell>12.1</TableCell>
                      <TableCell>4.3</TableCell>
                      <TableCell>3700</TableCell>
                      <TableCell>300</TableCell>
                      <TableCell>Scroll</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>Fin & Tube</TableCell>
                      <TableCell>3Ph/380V/50Hz</TableCell>
                      <TableCell>R410A</TableCell>
                      <TableCell>58</TableCell>
                      <TableCell>1200×800×1050</TableCell>
                      <TableCell>145</TableCell>
                      <TableCell>1340×940×1190</TableCell>
                      <TableCell>160</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">16000 PRO5 (INV)</TableCell>
                      <TableCell>16.0</TableCell>
                      <TableCell>384</TableCell>
                      <TableCell>3/6/9/12</TableCell>
                      <TableCell>5.6</TableCell>
                      <TableCell>18.5</TableCell>
                      <TableCell>6.5</TableCell>
                      <TableCell>5600</TableCell>
                      <TableCell>350</TableCell>
                      <TableCell>Scroll</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>Fin & Tube</TableCell>
                      <TableCell>3Ph/380V/50Hz</TableCell>
                      <TableCell>R410A</TableCell>
                      <TableCell>62</TableCell>
                      <TableCell>1500×1000×1200</TableCell>
                      <TableCell>175</TableCell>
                      <TableCell>1640×1140×1340</TableCell>
                      <TableCell>195</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">30000 PRO5 (INV)</TableCell>
                      <TableCell>30.0</TableCell>
                      <TableCell>720</TableCell>
                      <TableCell>6/9/12/15/18</TableCell>
                      <TableCell>10.6</TableCell>
                      <TableCell>34.6</TableCell>
                      <TableCell>12.2</TableCell>
                      <TableCell>10600</TableCell>
                      <TableCell>400</TableCell>
                      <TableCell>Scroll</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>Fin & Tube</TableCell>
                      <TableCell>3Ph/380V/50Hz</TableCell>
                      <TableCell>R410A</TableCell>
                      <TableCell>68</TableCell>
                      <TableCell>1800×1200×1400</TableCell>
                      <TableCell>250</TableCell>
                      <TableCell>1940×1340×1540</TableCell>
                      <TableCell>275</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          {/* 3. Air Cooled Chiller MAX 6.0 HFO Series */}
          <div className="product-category">
            <h3 className="text-3xl font-bold text-foreground mb-8">Air Cooled Chiller MAX 6.0 HFO Series</h3>
            
            {/* Product Image Placeholder */}
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-8">
              <div className="text-muted-foreground text-lg">Product Image Placeholder</div>
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
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Model</TableHead>
                      <TableHead>Cooling Capacity (kW)</TableHead>
                      <TableHead>Power Input (kW)</TableHead>
                      <TableHead>EER</TableHead>
                      <TableHead>Refrigerant</TableHead>
                      <TableHead>Compressor Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">MAX 6.0-60</TableCell>
                      <TableCell>62.5</TableCell>
                      <TableCell>18.2</TableCell>
                      <TableCell>3.43</TableCell>
                      <TableCell>R1234ze</TableCell>
                      <TableCell>Scroll</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">MAX 6.0-120</TableCell>
                      <TableCell>125.8</TableCell>
                      <TableCell>36.8</TableCell>
                      <TableCell>3.42</TableCell>
                      <TableCell>R1234ze</TableCell>
                      <TableCell>Scroll</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">MAX 6.0-180</TableCell>
                      <TableCell>188.5</TableCell>
                      <TableCell>55.2</TableCell>
                      <TableCell>3.41</TableCell>
                      <TableCell>R1234ze</TableCell>
                      <TableCell>Scroll</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">MAX 6.0-250</TableCell>
                      <TableCell>251.2</TableCell>
                      <TableCell>73.8</TableCell>
                      <TableCell>3.40</TableCell>
                      <TableCell>R1234ze</TableCell>
                      <TableCell>Screw</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          {/* 4. CM-FAO2 Evaporative Cooler Series */}
          <div className="product-category">
            <h3 className="text-3xl font-bold text-foreground mb-8">CM-FAO2 Evaporative Cooler Series</h3>
            
            {/* Product Image Placeholder */}
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-8">
              <div className="text-muted-foreground text-lg">Product Image Placeholder</div>
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
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Model</TableHead>
                      <TableHead>Air Flow (m³/h)</TableHead>
                      <TableHead>Cooling Capacity (kW)</TableHead>
                      <TableHead>Power Input (kW)</TableHead>
                      <TableHead>Water Consumption (L/h)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">CM-FAO2-18</TableCell>
                      <TableCell>18,000</TableCell>
                      <TableCell>15.2</TableCell>
                      <TableCell>2.2</TableCell>
                      <TableCell>45</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">CM-FAO2-30</TableCell>
                      <TableCell>30,000</TableCell>
                      <TableCell>25.8</TableCell>
                      <TableCell>3.8</TableCell>
                      <TableCell>75</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">CM-FAO2-45</TableCell>
                      <TableCell>45,000</TableCell>
                      <TableCell>38.5</TableCell>
                      <TableCell>5.5</TableCell>
                      <TableCell>115</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          {/* 5. Dehumidifier Series */}
          <div className="product-category">
            <h3 className="text-3xl font-bold text-foreground mb-8">Dehumidifier Series</h3>
            
            {/* Product Image Placeholder */}
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-8">
              <div className="text-muted-foreground text-lg">Product Image Placeholder</div>
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

            {/* Technical Specifications */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">Technical Specifications</h4>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Model</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Dehumidification (L/day)</TableHead>
                      <TableHead>Air Flow (m³/h)</TableHead>
                      <TableHead>Power Input (kW)</TableHead>
                      <TableHead>Coverage Area (m²)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">CM-DH90</TableCell>
                      <TableCell>Floor Standing</TableCell>
                      <TableCell>90</TableCell>
                      <TableCell>1,800</TableCell>
                      <TableCell>2.8</TableCell>
                      <TableCell>200</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">CM-DH138</TableCell>
                      <TableCell>Floor Standing</TableCell>
                      <TableCell>138</TableCell>
                      <TableCell>2,500</TableCell>
                      <TableCell>3.9</TableCell>
                      <TableCell>300</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">CM-DH168</TableCell>
                      <TableCell>Ceiling Type</TableCell>
                      <TableCell>168</TableCell>
                      <TableCell>3,200</TableCell>
                      <TableCell>4.8</TableCell>
                      <TableCell>400</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">CM-DH240</TableCell>
                      <TableCell>Ceiling Type</TableCell>
                      <TableCell>240</TableCell>
                      <TableCell>4,500</TableCell>
                      <TableCell>6.2</TableCell>
                      <TableCell>600</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          {/* 6. Ultrasonic Humidifier Series */}
          <div className="product-category">
            <h3 className="text-3xl font-bold text-foreground mb-8">Ultrasonic Humidifier Series</h3>
            
            {/* Product Image Placeholder */}
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-8">
              <div className="text-muted-foreground text-lg">Product Image Placeholder</div>
            </div>

            {/* Features & Benefits */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">Features & Benefits</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Precision humidification control with 10%-99% humidity range</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Advanced ultrasonic technology with 99% atomization rate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Ultra-fine water mist particles (1-5 microns)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Energy-efficient operation requiring only 0.06kW per kg of water</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Intelligent waterproof fan system with delay function</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Direct water connection with automatic level adjustment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Prevents water condensation and eliminates germ breeding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                    <span className="text-muted-foreground">Stainless steel crystal construction for durability</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">Technical Specifications</h4>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Model</TableHead>
                      <TableHead>Humidification Capacity (kg/h)</TableHead>
                      <TableHead>Coverage Area (m²)</TableHead>
                      <TableHead>Power Input (kW)</TableHead>
                      <TableHead>Water Tank (L)</TableHead>
                      <TableHead>Humidity Control Range</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">CMH-UH16</TableCell>
                      <TableCell>1.6</TableCell>
                      <TableCell>10-50</TableCell>
                      <TableCell>0.10</TableCell>
                      <TableCell>15</TableCell>
                      <TableCell>10%-99%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">CMH-UH60</TableCell>
                      <TableCell>6.0</TableCell>
                      <TableCell>50-100</TableCell>
                      <TableCell>0.36</TableCell>
                      <TableCell>25</TableCell>
                      <TableCell>10%-99%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">CMH-UH120</TableCell>
                      <TableCell>12.0</TableCell>
                      <TableCell>100-150</TableCell>
                      <TableCell>0.72</TableCell>
                      <TableCell>40</TableCell>
                      <TableCell>10%-99%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">CMH-UH180</TableCell>
                      <TableCell>18.0</TableCell>
                      <TableCell>150-200</TableCell>
                      <TableCell>1.08</TableCell>
                      <TableCell>60</TableCell>
                      <TableCell>10%-99%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;