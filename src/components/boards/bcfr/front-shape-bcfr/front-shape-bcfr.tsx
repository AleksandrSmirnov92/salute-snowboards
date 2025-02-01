import { ILegent } from '../../../../types/types';
import { LinearGradientFront } from '../../../liner-gradient-front/liner-gradient-front';
import { SnowboardInserts } from '../../../snowboards-inserts/snowboard-inserts';
import { LegendVersionOne } from '../legend/legend-position-one/legend';

interface IProps {
  colorShapeFront: string;
  legend: ILegent;
  modelSize: string | number;
}
export const FrontShapeBcfr = ({ legend, colorShapeFront, modelSize }: IProps) => {
  const scaleBoard = 0.1009;
  const width = 600;
  const height = 600;
  const strokeWidthBoard = 1;
  const translateX = 347;
  const translateY = 12;
  const viewBoxWidth = 600;
  const viewBoxHeight = 600;
  const currentLegend = (): JSX.Element | undefined => {
    switch (legend.pos) {
      case 'Not selected': {
        return;
      }
      case 'Version1': {
        return (
          <LegendVersionOne
            width={width}
            height={height}
            colorLegend={legend.colorLegend}
            backgroundColor={colorShapeFront}
            modelSize={modelSize}
          />
        );
      }
      default: {
        return;
      }
    }
  };
  return (
    <g transform={`translate(${0}, ${40})`}>
      <g transform={`translate(${translateX}, ${translateY}) scale(${scaleBoard}) rotate(${90})`}>
        <polyline
          fill={'url(#colorShapeFrontBCFR)'}
          //   fill={colorShapeFront}
          stroke="#black"
          strokeWidth={strokeWidthBoard}
          points="2408.1,114.9 2298.6,112.1 2054.9,104.1 1811.4,93.7 1567.9,80.8 1324.7,65.5 1081.5,47.8
    	1054.5,46.5 1027.4,45.5 1000.3,44.7 973.3,44.3 946.2,44.1 919.1,44.1 892,44.5 864.9,45.1 837.9,46 810.8,47.1 798.1,47.8
    	788.9,48.3 779.6,48.9 770.2,49.5 760.9,50.3 751.4,51.2 744,51.9 736.6,52.7 729.1,53.5 721.6,54.5 714.1,55.4 706.7,56.5
    	699.2,57.6 691.7,58.8 684.3,60 676.8,61.3 669.5,62.7 662.2,64.1 655,65.6 647.7,67.2 641.6,68.5 635.5,69.9 629.4,71.4
    	623.4,72.9 617.4,74.5 611.4,76.1 605.8,77.7 600.2,79.3 594.6,80.9 589,82.6 583.5,84.3 577.4,86.3 571.4,88.3 565.3,90.3
    	559.4,92.4 553.4,94.5 547.5,96.7 541.7,98.9 535.9,101.2 529.4,103.8 522.9,106.5 516.5,109.2 510.2,112 503.9,114.7 497.8,117.5
    	491.8,120.3 485.9,123.2 480,126 474.1,129 468.3,131.9 462.6,134.9 456.9,138 451.3,141 445.8,144.1 440.4,147.2 435.7,149.9
    	431.1,152.6 426.6,155.3 422.1,158.1 417.6,160.9 413.3,163.7 409,166.5 404.7,169.3 400.3,172.2 396,175.2 391.7,178.2
    	387.5,181.2 383.3,184.3 379.2,187.3 375.6,190.1 371.9,192.9 368.4,195.7 364.8,198.6 361.3,201.5 357.9,204.3 354.7,207.1
    	351.5,209.8 348.3,212.6 345.2,215.4 342.1,218.3 339.1,221.1 336,224 333,226.9 330.1,229.9 327.1,232.9 324.2,235.8 321.3,238.8
    	318.5,241.8 315.7,244.9 313.3,247.5 310.9,250.2 308.5,252.9 306.2,255.6 303.8,258.4 301.5,261.2 299.3,263.8 297.1,266.5
    	294.9,269.3 292.8,272 290.6,274.8 288.5,277.7 286.3,280.6 284.2,283.5 282.1,286.5 280,289.5 278.4,291.9 276.8,294.3
    	275.2,296.7 273.6,299.2 272,301.7 270.5,304.1 269.1,306.4 267.7,308.8 266.3,311.1 264.9,313.6 263.5,316 262.2,318.4
    	260.9,320.9 259.5,323.4 258.4,325.6 257.2,327.9 256.1,330.2 255,332.5 253.8,334.9 252.7,337.3 251.6,339.7 250.6,342.1
    	249.6,344.3 248.7,346.6 247.7,348.8 246.8,351.1 245.9,353.4 245,355.7 244.2,358 243.3,360.3 242.5,362.7 241.6,365.1
    	240.8,367.6 240,370 239.2,372.6 238.4,375.1 237.7,377.7 236.9,380.3 236.2,382.9 235.5,385.5 234.8,388.2 234.2,390.9
    	233.5,393.6 232.9,396.4 232.3,399.1 231.8,401.9 231.2,404.7 230.7,407.2 230.3,409.8 229.8,412.4 229.4,415 229,417.6
    	228.6,420.3 228.3,423 227.9,425.7 227.6,428.5 227.3,431.2 227,434 226.8,436.9 226.5,439.7 226.3,442.6 226.1,445.5 226,448.5
    	225.8,451.6 225.7,454.7 225.6,457.9 225.5,461.1 225.5,464.4 225.5,467.7 225.5,474 225.5,482 225.5,490 225.5,496.3 225.5,499.6
    	225.5,502.9 225.6,506.1 225.7,509.3 225.8,512.4 226,515.5 226.1,518.5 226.3,521.4 226.5,524.3 226.8,527.1 227,530 227.3,532.8
    	227.6,535.5 227.9,538.3 228.3,541 228.6,543.7 229,546.4 229.4,549 229.8,551.6 230.3,554.2 230.7,556.8 231.2,559.3 231.8,562.1
    	232.3,564.9 232.9,567.6 233.5,570.3 234.2,573.1 234.8,575.8 235.5,578.5 236.2,581.1 236.9,583.7 237.7,586.3 238.4,588.9
    	239.2,591.4 240,594 240.8,596.4 241.6,598.9 242.5,601.3 243.3,603.7 244.2,606 245,608.3 245.9,610.6 246.8,612.9 247.7,615.2
    	248.7,617.4 249.6,619.7 250.6,621.9 251.6,624.3 252.7,626.7 253.8,629.1 255,631.5 256.1,633.8 257.2,636.1 258.4,638.4
    	259.5,640.6 260.9,643.1 262.2,645.6 263.5,648 264.9,650.4 266.3,652.9 267.7,655.2 269.1,657.6 270.5,659.9 272,662.3
    	273.6,664.8 275.2,667.3 276.8,669.7 278.4,672.1 280,674.5 282.1,677.5 284.2,680.5 286.3,683.4 288.5,686.3 290.6,689.2
    	292.8,692 294.9,694.7 297.1,697.5 299.3,700.2 301.5,702.8 303.8,705.6 306.2,708.4 308.5,711.1 310.9,713.8 313.3,716.5
    	315.7,719.1 318.5,722.2 321.3,725.2 324.2,728.2 327.1,731.1 330.1,734.1 333,737.1 336,740 339.1,742.9 342.1,745.7 345.2,748.6
    	348.3,751.4 351.5,754.2 354.7,756.9 357.9,759.7 361.3,762.5 364.8,765.4 368.4,768.3 371.9,771.1 375.6,773.9 379.2,776.7
    	383.3,779.7 387.5,782.8 391.7,785.8 396,788.8 400.3,791.8 404.7,794.7 409,797.5 413.3,800.3 417.6,803.1 422.1,805.9
    	426.6,808.7 431.1,811.4 435.7,814.1 440.4,816.8 445.8,819.9 451.3,823 456.9,826 462.6,829.1 468.3,832.1 474.1,835 480,838
    	485.9,840.8 491.8,843.7 497.8,846.5 503.9,849.3 510.2,852 516.5,854.8 522.9,857.5 529.4,860.2 535.9,862.8 541.7,865.1
    	547.5,867.3 553.4,869.5 559.4,871.6 565.3,873.7 571.4,875.7 577.4,877.7 583.5,879.7 589,881.4 594.6,883.1 600.2,884.7
    	605.8,886.3 611.4,887.9 617.4,889.5 623.4,891.1 629.4,892.6 635.5,894.1 641.6,895.5 647.7,896.8 655,898.4 662.2,899.9
    	669.5,901.3 676.8,902.7 684.3,904 691.7,905.2 699.2,906.4 706.7,907.5 714.1,908.6 721.6,909.5 729.1,910.5 736.6,911.3
    	744,912.1 751.4,912.8 760.9,913.7 770.2,914.5 779.6,915.1 788.9,915.7 798.1,916.2 825.1,917.5 852.2,918.5 879.2,919.3
    	906.3,919.7 933.4,919.9 960.5,919.9 987.6,919.5 1014.6,918.9 1041.7,918 1068.8,916.9 1081.5,916.2 1190.8,908 1434,891.3
    	1677.4,877.1 1920.8,865.3 2164.4,856 2408.1,849.1 2549.9,849.1 2691.6,849.1 2871.8,852.9 3101.2,859.9 3330.7,869.1 3560,880.6
    	3789.2,894.5 4018.2,910.6 4045.3,911.9 4072.3,912.9 4099.4,913.6 4126.5,914.1 4153.5,914.3 4180.6,914.2 4207.7,913.9
    	4234.8,913.2 4261.9,912.4 4288.9,911.2 4301.7,910.6 4308.1,910 4314.4,909.3 4320.6,908.6 4326.7,907.9 4332.8,907.1
    	4338.8,906.2 4344.7,905.4 4350.1,904.5 4355.4,903.7 4360.7,902.8 4365.9,901.8 4371,900.9 4376,899.9 4381.1,898.8 4386,897.8
    	4390.9,896.7 4395.7,895.6 4400.5,894.4 4405.2,893.2 4410.7,891.8 4416.1,890.4 4421.5,888.9 4426.8,887.4 4431.1,886.1
    	4435.5,884.7 4439.8,883.4 4444.1,882 4448.3,880.6 4452.4,879.2 4457.2,877.5 4462,875.8 4466.6,874 4471.3,872.3 4475.3,870.7
    	4479.3,869 4483.3,867.4 4487.2,865.8 4491,864.1 4494.8,862.4 4498.6,860.7 4502.3,859 4505.7,857.4 4509.2,855.7 4512.5,854
    	4515.9,852.4 4519.1,850.7 4522.4,849 4526.2,847 4529.9,845 4533.5,842.9 4537.1,840.9 4540.3,839 4543.4,837.2 4546.5,835.3
    	4549.5,833.5 4552.5,831.6 4555.5,829.7 4558.4,827.8 4561.2,825.9 4564.5,823.8 4567.6,821.6 4570.8,819.4 4573.8,817.2
    	4576.8,815 4579.8,812.8 4582.7,810.6 4585.4,808.6 4588,806.5 4590.5,804.5 4593,802.4 4595.5,800.4 4597.9,798.4 4600.5,796.1
    	4603.1,793.9 4605.6,791.6 4608.1,789.4 4610.6,787.2 4612.9,785 4615.3,782.7 4617.5,780.5 4619.8,778.3 4622,776.1 4624.3,773.8
    	4626.5,771.5 4628.6,769.3 4630.7,767 4632.8,764.7 4634.8,762.5 4636.8,760.2 4638.8,757.9 4640.8,755.6 4642.7,753.3
    	4644.5,751.1 4646.4,748.8 4648.2,746.5 4650.2,744 4652.1,741.4 4654.1,738.9 4655.9,736.4 4657.8,733.8 4659.7,731.1
    	4661.6,728.4 4663.5,725.7 4665.3,723 4667.1,720.3 4668.9,717.5 4670.9,714.3 4673,711.1 4674.9,707.8 4676.9,704.5 4678.9,701.1
    	4680.8,697.7 4682.7,694.3 4684.5,690.9 4686.4,687.4 4688.2,683.9 4690,680.4 4691.4,677.7 4692.8,674.9 4694.1,672.1
    	4695.4,669.3 4696.7,666.5 4698,663.7 4699.1,661 4700.3,658.3 4701.4,655.6 4702.5,652.8 4703.6,650.1 4704.8,647 4706,643.9
    	4707.2,640.8 4708.3,637.7 4709.4,634.6 4710.5,631.4 4711.5,628.3 4712.5,625.1 4713.6,621.4 4714.8,617.7 4715.8,614
    	4716.9,610.3 4717.9,606.5 4718.8,602.8 4719.8,599 4720.6,595.5 4721.4,592 4722.2,588.4 4722.9,584.9 4723.6,581.3 4724.3,577.7
    	4725,573.8 4725.7,569.9 4726.4,565.9 4727,561.9 4727.6,557.9 4728.1,553.8 4728.7,549.8 4729.2,545.3 4729.7,540.8 4730.2,536.2
    	4730.6,531.7 4731,527.1 4731.3,522.4 4731.6,517.8 4731.8,513.1 4732.1,508.4 4732.2,503.7 4732.4,499 4732.5,494.3 4732.5,489.6
    	4732.5,484.9 4732.5,482 4732.5,479.1 4732.5,474.4 4732.5,469.7 4732.4,465 4732.2,460.3 4732.1,455.6 4731.8,450.9 4731.6,446.2
    	4731.3,441.6 4731,436.9 4730.6,432.3 4730.2,427.8 4729.7,423.2 4729.2,418.7 4728.7,414.2 4728.1,410.2 4727.6,406.1 4727,402.1
    	4726.4,398.1 4725.7,394.1 4725,390.2 4724.3,386.3 4723.6,382.7 4722.9,379.1 4722.2,375.6 4721.4,372 4720.6,368.5 4719.8,365
    	4718.8,361.2 4717.9,357.5 4716.9,353.7 4715.8,350 4714.8,346.3 4713.6,342.6 4712.5,338.9 4711.5,335.7 4710.5,332.6
    	4709.4,329.4 4708.3,326.3 4707.2,323.2 4706,320.1 4704.8,317 4703.6,313.9 4702.5,311.2 4701.4,308.4 4700.3,305.7 4699.1,303
    	4698,300.3 4696.7,297.5 4695.4,294.7 4694.1,291.9 4692.8,289.1 4691.4,286.3 4690,283.6 4688.2,280.1 4686.4,276.6 4684.5,273.1
    	4682.7,269.7 4680.8,266.3 4678.9,262.9 4676.9,259.5 4674.9,256.2 4673,252.9 4670.9,249.7 4668.9,246.5 4667.1,243.7 4665.3,241
    	4663.5,238.3 4661.6,235.6 4659.7,232.9 4657.8,230.2 4655.9,227.6 4654.1,225.1 4652.1,222.6 4650.2,220 4648.2,217.5
    	4646.4,215.2 4644.5,212.9 4642.7,210.7 4640.8,208.4 4638.8,206.1 4636.8,203.8 4634.8,201.5 4632.8,199.3 4630.7,197
    	4628.6,194.7 4626.5,192.5 4624.3,190.2 4622,187.9 4619.8,185.7 4617.5,183.5 4615.3,181.3 4612.9,179 4610.6,176.8 4608.1,174.6
    	4605.6,172.4 4603.1,170.1 4600.5,167.9 4597.9,165.6 4595.5,163.6 4593,161.6 4590.5,159.5 4588,157.5 4585.4,155.4 4582.7,153.4
    	4579.8,151.2 4576.8,149 4573.8,146.8 4570.8,144.6 4567.6,142.4 4564.5,140.2 4561.2,138.1 4558.4,136.2 4555.5,134.3
    	4552.5,132.4 4549.5,130.5 4546.5,128.7 4543.4,126.8 4540.3,125 4537.1,123.1 4533.5,121.1 4529.9,119 4526.2,117 4522.4,115
    	4519.1,113.3 4515.9,111.6 4512.5,110 4509.2,108.3 4505.7,106.6 4502.3,105 4498.6,103.3 4494.8,101.6 4491,99.9 4487.2,98.2
    	4483.3,96.6 4479.3,95 4475.3,93.3 4471.3,91.7 4466.6,90 4462,88.2 4457.2,86.5 4452.4,84.8 4448.3,83.4 4444.1,82 4439.8,80.6
    	4435.5,79.3 4431.1,77.9 4426.8,76.6 4421.5,75.1 4416.1,73.6 4410.7,72.2 4405.2,70.8 4400.5,69.6 4395.7,68.4 4390.9,67.3
    	4386,66.2 4381.1,65.2 4376,64.1 4371,63.1 4365.9,62.2 4360.7,61.2 4355.4,60.3 4350.1,59.5 4344.7,58.6 4338.8,57.8 4332.8,56.9
    	4326.7,56.1 4320.6,55.4 4314.4,54.7 4308.1,54 4301.7,53.4 4274.6,52.1 4247.6,51.1 4220.5,50.4 4193.4,49.9 4166.3,49.7
    	4139.2,49.8 4112.2,50.1 4085.1,50.8 4058,51.6 4031,52.8 4018.2,53.4 3838.5,66.3 3609.3,80.6 3380,92.6 3150.6,102.3
    	2921.1,109.8 2691.6,114.9 	"
        />
      </g>

      <SnowboardInserts
        color="black"
        translateCircleX={180}
        translateCircleY={55}
        translateCircle2Y={225}
        numberOfRows={5}
        numberOfColumns={2}
        viewBoxWidth={viewBoxWidth}
        viewBoxHeight={viewBoxHeight}
        powMode={true}
      />
      {currentLegend()}

      <LinearGradientFront
        id={'colorShapeFrontBCFR'}
        colorShapeFront={colorShapeFront}
        cords={{ x1: '0%', x2: '100%', y1: '0%', y2: '0%' }}
      />
    </g>
  );
};
