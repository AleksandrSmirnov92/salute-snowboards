interface IPropsVertivalLightning {
  color: string;
  width: number;
  height: number;
}
export const VerticalLightning = ({ color, width, height }: IPropsVertivalLightning) => {
  const scale = 0.08;
  const translateX = 288;
  const translateY = 185;
  const rotate = 90;
  return (
    <svg
      version="1.1"
      id="Слой_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
    >
      <g transform={`translate(${translateX} ${translateY}) scale(${-scale},${scale}) rotate(${rotate})`}>
        <polygon
          fill={color}
          points="853.3,213.5 782,160 781.8,159.9 781.6,159.8 781.5,159.6 781.3,159.5 781.1,159.3 780.9,159.2 
		780.8,159.1 780.7,159 780.5,158.9 780.4,158.8 780.3,158.7 780.2,158.5 780,158.4 779.9,158.3 779.8,158.2 779.7,158.1 779.6,158 
		779.5,157.9 779.4,157.8 779.3,157.7 779.2,157.6 779.1,157.5 779,157.4 778.9,157.3 778.8,157.2 778.7,157.1 778.7,157 
		778.6,156.9 778.5,156.8 778.4,156.7 778.4,156.7 778.3,156.6 778.3,156.5 778.2,156.4 778.1,156.4 778.1,156.3 778,156.2 
		778,156.1 777.9,156 777.9,156 777.8,155.9 777.8,155.8 777.7,155.7 777.7,155.7 777.6,155.6 777.6,155.6 777.5,155.5 777.5,155.4 
		777.5,155.4 777.4,155.3 777.4,155.2 777.4,155.2 777.3,155.1 777.3,155 777.3,155 777.2,154.9 777.2,154.9 777.2,154.8 
		777.1,154.7 777.1,154.7 777.1,154.6 777.1,154.6 777,154.5 777,154.4 777,154.4 777,154.3 776.9,154.3 776.9,154.2 776.9,154.2 
		776.9,154.1 776.9,154.1 776.8,154 776.8,154 776.8,153.9 776.8,153.9 776.8,153.8 776.8,153.8 776.8,153.7 776.8,153.7 
		776.7,153.7 776.7,153.6 776.7,153.6 776.7,153.5 776.7,153.5 776.7,153.4 776.7,153.4 776.7,153.4 776.7,153.3 776.6,153.3 
		776.6,153.2 776.6,153.2 776.6,153.1 776.6,153.1 776.6,153.1 776.6,153 776.6,153 776.6,152.9 776.6,152.9 776.6,152.9 
		776.6,152.8 776.6,152.8 776.6,152.7 776.6,152.7 776.6,152.7 776.6,152.6 776.6,152.6 776.6,152.6 776.6,152.5 776.6,152.5 
		776.6,152.4 776.6,152.4 776.6,152.4 776.6,152.3 776.6,152.3 776.6,152.3 776.6,152.2 776.6,152.2 776.6,152.2 776.6,152.1 
		776.6,152.1 776.6,152 776.6,152 776.6,152 776.6,151.9 776.6,151.9 776.6,151.9 776.6,151.9 776.6,151.8 776.6,151.8 776.6,151.8 
		776.6,151.7 776.6,151.7 776.6,151.7 776.6,151.6 776.6,151.6 776.7,151.6 776.7,151.5 776.7,151.5 776.7,151.5 776.7,151.5 
		776.7,151.4 776.7,151.4 776.7,151.4 776.7,151.3 776.7,151.3 776.7,151.3 776.7,151.3 776.7,151.2 776.8,151.2 776.8,151.2 
		776.8,151.2 776.8,151.1 776.8,151.1 776.8,151.1 776.8,151.1 776.8,151 776.8,151 776.8,151 776.9,151 776.9,150.9 776.9,150.9 
		776.9,150.9 776.9,150.9 776.9,150.8 776.9,150.8 776.9,150.8 777,150.7 777,150.7 777,150.7 777,150.7 777,150.6 777,150.6 
		777,150.6 777.1,150.6 777.1,150.5 777.1,150.5 777.1,150.5 777.1,150.5 777.1,150.4 777.2,150.4 777.2,150.4 777.2,150.4 
		777.2,150.4 777.2,150.3 777.2,150.3 777.3,150.3 777.3,150.3 777.3,150.2 777.3,150.2 777.3,150.2 777.3,150.2 777.4,150.1 
		777.4,150.1 777.4,150.1 777.4,150.1 777.5,150.1 777.5,150 777.5,150 777.5,150 777.5,150 777.6,150 777.6,149.9 777.6,149.9 
		777.6,149.9 777.6,149.9 777.7,149.9 777.7,149.8 777.7,149.8 777.7,149.8 777.8,149.8 777.8,149.8 777.8,149.7 777.8,149.7 
		777.8,149.7 777.9,149.7 777.9,149.7 777.9,149.6 777.9,149.6 778,149.6 778,149.6 778,149.6 778,149.6 778.1,149.5 778.1,149.5 
		778.1,149.5 778.2,149.5 778.2,149.5 778.2,149.5 778.2,149.4 778.3,149.4 778.3,149.4 778.3,149.4 778.3,149.4 778.4,149.4 
		778.4,149.3 778.4,149.3 778.5,149.3 778.5,149.3 778.5,149.3 778.6,149.3 778.6,149.2 778.6,149.2 778.7,149.2 778.7,149.2 
		778.8,149.2 778.8,149.2 778.8,149.2 778.9,149.1 778.9,149.1 778.9,149.1 779,149.1 779,149.1 779,149.1 779.1,149.1 779.1,149.1 
		779.2,149.1 779.2,149 779.2,149 779.3,149 779.3,149 779.4,149 779.4,149 779.5,149 779.5,149 779.6,149 779.6,148.9 779.7,148.9 
		779.7,148.9 779.8,148.9 779.8,148.9 779.9,148.9 779.9,148.9 780,148.9 780,148.9 780.1,148.9 780.1,148.9 780.2,148.9 
		780.2,148.9 780.3,148.9 780.3,148.9 780.4,148.9 780.5,148.9 780.6,148.9 780.6,148.9 780.7,148.9 780.8,148.8 780.9,148.8 
		781,148.8 781,148.9 781.2,148.9 781.3,148.9 781.4,148.9 781.5,148.9 781.7,148.9 781.9,148.9 782,148.9 782.2,148.9 782.5,148.9 
		782.8,149 783.2,149 783.6,149 784,149.1 785.7,149.3 788,149.6 790.8,149.9 794.5,150.4 1319.7,216 1320.5,216.1 1321.2,216.2 
		1321.9,216.3 1322.6,216.4 1323.2,216.4 1323.7,216.5 1324.2,216.5 1324.7,216.5 1325.1,216.5 1325.5,216.6 1325.9,216.6 
		1326.3,216.6 1326.7,216.6 1327.1,216.6 1327.4,216.6 1327.8,216.6 1328.1,216.6 1328.4,216.6 1328.7,216.6 1329,216.6 
		1329.3,216.6 1329.5,216.6 1329.8,216.6 1330.1,216.6 1330.3,216.6 1330.5,216.5 1330.7,216.5 1330.9,216.5 1331.1,216.5 
		1331.3,216.5 1331.4,216.5 1331.6,216.4 1331.8,216.4 1331.9,216.4 1332.1,216.4 1332.2,216.3 1332.4,216.3 1332.5,216.3 
		1332.7,216.3 1332.8,216.2 1332.9,216.2 1333,216.2 1333.1,216.2 1333.2,216.1 1333.3,216.1 1333.4,216.1 1333.5,216.1 
		1333.6,216.1 1333.7,216 1333.8,216 1333.8,216 1333.9,215.9 1334,215.9 1334.1,215.9 1334.2,215.9 1334.2,215.8 1334.3,215.8 
		1334.4,215.8 1334.4,215.8 1334.5,215.8 1334.6,215.7 1334.6,215.7 1334.7,215.7 1334.7,215.7 1334.8,215.6 1334.9,215.6 
		1334.9,215.6 1335,215.6 1335,215.5 1335.1,215.5 1335.1,215.5 1335.2,215.5 1335.2,215.4 1335.3,215.4 1335.3,215.4 1335.4,215.4 
		1335.4,215.3 1335.4,215.3 1335.5,215.3 1335.5,215.3 1335.6,215.2 1335.6,215.2 1335.7,215.2 1335.7,215.2 1335.7,215.1 
		1335.8,215.1 1335.8,215.1 1335.8,215.1 1335.9,215 1335.9,215 1335.9,215 1336,215 1336,215 1336,214.9 1336.1,214.9 
		1336.1,214.9 1336.1,214.9 1336.2,214.8 1336.2,214.8 1336.2,214.8 1336.2,214.8 1336.3,214.7 1336.3,214.7 1336.3,214.7 
		1336.3,214.7 1336.4,214.6 1336.4,214.6 1336.4,214.6 1336.4,214.6 1336.5,214.5 1336.5,214.5 1336.5,214.5 1336.6,214.5 
		1336.6,214.4 1336.6,214.4 1336.6,214.4 1336.6,214.4 1336.7,214.3 1336.7,214.3 1336.7,214.3 1336.7,214.3 1336.7,214.2 
		1336.8,214.2 1336.8,214.2 1336.8,214.2 1336.8,214.1 1336.8,214.1 1336.8,214.1 1336.9,214.1 1336.9,214 1336.9,214 1336.9,214 
		1336.9,214 1336.9,213.9 1337,213.9 1337,213.9 1337,213.9 1337,213.8 1337,213.8 1337.1,213.8 1337.1,213.8 1337.1,213.7 
		1337.1,213.7 1337.1,213.7 1337.1,213.6 1337.1,213.6 1337.1,213.6 1337.2,213.6 1337.2,213.5 1337.2,213.5 1337.2,213.5 
		1337.2,213.5 1337.2,213.4 1337.2,213.4 1337.2,213.4 1337.2,213.3 1337.3,213.3 1337.3,213.3 1337.3,213.3 1337.3,213.2 
		1337.3,213.2 1337.3,213.2 1337.3,213.2 1337.3,213.1 1337.3,213.1 1337.3,213.1 1337.3,213 1337.3,213 1337.4,213 1337.4,213 
		1337.4,212.9 1337.4,212.9 1337.4,212.9 1337.4,212.8 1337.4,212.8 1337.4,212.8 1337.4,212.7 1337.4,212.7 1337.4,212.7 
		1337.4,212.6 1337.4,212.6 1337.4,212.6 1337.4,212.5 1337.4,212.5 1337.4,212.5 1337.4,212.4 1337.4,212.4 1337.5,212.4 
		1337.5,212.3 1337.5,212.3 1337.5,212.2 1337.5,212.2 1337.5,212.2 1337.5,212.1 1337.5,212.1 1337.5,212 1337.5,212 1337.5,212 
		1337.5,211.9 1337.5,211.9 1337.5,211.8 1337.5,211.8 1337.4,211.8 1337.4,211.7 1337.4,211.7 1337.4,211.6 1337.4,211.6 
		1337.4,211.5 1337.4,211.5 1337.4,211.4 1337.4,211.4 1337.4,211.4 1337.4,211.3 1337.4,211.3 1337.4,211.2 1337.4,211.2 
		1337.4,211.1 1337.3,211.1 1337.3,211 1337.3,211 1337.3,210.9 1337.3,210.9 1337.3,210.8 1337.3,210.8 1337.3,210.7 1337.2,210.7 
		1337.2,210.6 1337.2,210.5 1337.2,210.5 1337.2,210.4 1337.2,210.4 1337.1,210.3 1337.1,210.2 1337.1,210.2 1337.1,210.1 1337,210 
		1337,210 1337,209.9 1337,209.8 1336.9,209.8 1336.9,209.7 1336.8,209.6 1336.8,209.5 1336.8,209.4 1336.7,209.4 1336.7,209.3 
		1336.7,209.2 1336.6,209.1 1336.6,209 1336.5,209 1336.5,208.9 1336.4,208.8 1336.4,208.7 1336.3,208.6 1336.3,208.6 1336.2,208.5 
		1336.2,208.4 1336.1,208.3 1336.1,208.2 1336,208.1 1335.9,208 1335.9,207.9 1335.8,207.8 1335.8,207.7 1335.7,207.6 1335.6,207.5 
		1335.6,207.5 1335.5,207.4 1335.4,207.3 1335.3,207.2 1335.3,207.1 1335.2,207 1335.1,206.9 1335,206.8 1334.9,206.7 1334.8,206.6 
		1334.8,206.5 1334.7,206.4 1334.6,206.3 1334.5,206.2 1334.4,206.1 1334.4,206.1 1334.3,206 1334.2,205.9 1334.1,205.8 
		1334.1,205.8 1334,205.7 1333.9,205.6 1333.9,205.6 1333.8,205.5 1333.7,205.4 1333.7,205.4 1333.6,205.3 1333.6,205.3 
		1333.5,205.2 1333.4,205.2 1333.4,205.1 1333.3,205 1333.2,205 1333.1,204.9 1332.8,204.7 1332.6,204.5 1332.3,204.2 1331.9,204 
		1331.4,203.6 1330.8,203.2 1329.4,202.1 1327.3,200.5 1324.6,198.5 1294.6,176 1294.4,175.9 1294.2,175.7 1294.1,175.6 
		1293.9,175.4 1293.7,175.3 1293.6,175.2 1293.4,175.1 1293.3,175 1293.2,174.8 1293.1,174.7 1292.9,174.6 1292.8,174.5 
		1292.7,174.4 1292.6,174.3 1292.5,174.2 1292.4,174.1 1292.3,174 1292.2,173.9 1292.1,173.8 1292,173.7 1291.9,173.6 1291.8,173.5 
		1291.8,173.4 1291.7,173.4 1291.6,173.3 1291.6,173.2 1291.5,173.1 1291.4,173 1291.4,173 1291.3,172.9 1291.2,172.8 1291.2,172.8 
		1291.2,172.7 1291.1,172.6 1291.1,172.6 1291,172.5 1291,172.4 1290.9,172.4 1290.9,172.3 1290.8,172.3 1290.8,172.2 1290.8,172.2 
		1290.7,172.1 1290.7,172 1290.7,172 1290.6,171.9 1290.6,171.9 1290.6,171.8 1290.6,171.8 1290.5,171.7 1290.5,171.7 1290.5,171.6 
		1290.4,171.6 1290.4,171.5 1290.4,171.5 1290.4,171.4 1290.3,171.4 1290.3,171.3 1290.3,171.3 1290.3,171.2 1290.3,171.2 
		1290.2,171.1 1290.2,171.1 1290.2,171.1 1290.2,171 1290.2,171 1290.2,170.9 1290.2,170.9 1290.1,170.9 1290.1,170.8 1290.1,170.8 
		1290.1,170.8 1290.1,170.7 1290.1,170.7 1290.1,170.6 1290.1,170.6 1290.1,170.6 1290.1,170.5 1290,170.5 1290,170.5 1290,170.4 
		1290,170.4 1290,170.4 1290,170.3 1290,170.3 1290,170.3 1290,170.2 1290,170.2 1290,170.2 1290,170.1 1290,170.1 1289.9,170.1 
		1289.9,170 1289.9,170 1289.9,170 1289.9,169.9 1289.9,169.9 1289.9,169.9 1289.9,169.8 1289.9,169.8 1289.9,169.8 1289.9,169.7 
		1289.9,169.7 1289.9,169.7 1289.9,169.6 1289.9,169.6 1289.9,169.6 1289.9,169.6 1289.9,169.5 1289.9,169.5 1289.9,169.5 
		1289.9,169.5 1289.9,169.4 1289.9,169.4 1289.9,169.4 1289.9,169.3 1289.9,169.3 1289.9,169.3 1289.9,169.3 1289.9,169.2 
		1289.9,169.2 1289.9,169.2 1290,169.1 1290,169.1 1290,169.1 1290,169.1 1290,169 1290,169 1290,169 1290,169 1290,168.9 
		1290,168.9 1290,168.9 1290,168.9 1290,168.8 1290,168.8 1290,168.8 1290.1,168.7 1290.1,168.7 1290.1,168.7 1290.1,168.7 
		1290.1,168.6 1290.1,168.6 1290.1,168.6 1290.1,168.6 1290.1,168.5 1290.1,168.5 1290.1,168.5 1290.1,168.5 1290.2,168.4 
		1290.2,168.4 1290.2,168.4 1290.2,168.4 1290.2,168.3 1290.2,168.3 1290.2,168.3 1290.2,168.3 1290.2,168.2 1290.3,168.2 
		1290.3,168.2 1290.3,168.2 1290.3,168.1 1290.3,168.1 1290.3,168.1 1290.3,168.1 1290.4,168 1290.4,168 1290.4,168 1290.4,167.9 
		1290.4,167.9 1290.4,167.9 1290.5,167.9 1290.5,167.8 1290.5,167.8 1290.5,167.8 1290.5,167.8 1290.6,167.7 1290.6,167.7 
		1290.6,167.7 1290.6,167.6 1290.6,167.6 1290.7,167.6 1290.7,167.6 1290.7,167.5 1290.7,167.5 1290.8,167.5 1290.8,167.5 
		1290.8,167.4 1290.8,167.4 1290.8,167.4 1290.9,167.3 1290.9,167.3 1290.9,167.3 1291,167.3 1291,167.2 1291,167.2 1291.1,167.2 
		1291.1,167.1 1291.1,167.1 1291.2,167.1 1291.2,167 1291.2,167 1291.3,167 1291.3,167 1291.3,166.9 1291.4,166.9 1291.4,166.9 
		1291.4,166.8 1291.5,166.8 1291.5,166.8 1291.6,166.7 1291.6,166.7 1291.7,166.7 1291.7,166.7 1291.7,166.6 1291.8,166.6 
		1291.8,166.6 1291.9,166.5 1291.9,166.5 1292,166.5 1292.1,166.4 1292.1,166.4 1292.2,166.4 1292.2,166.3 1292.3,166.3 
		1292.3,166.3 1292.4,166.2 1292.4,166.2 1292.5,166.2 1292.6,166.1 1292.7,166.1 1292.7,166.1 1292.8,166 1292.9,166 1292.9,166 
		1293,165.9 1293.1,165.9 1293.2,165.8 1293.3,165.8 1293.4,165.8 1293.5,165.7 1293.6,165.7 1293.7,165.7 1293.8,165.6 
		1293.9,165.6 1294,165.6 1294.1,165.5 1294.2,165.5 1294.3,165.5 1294.4,165.4 1294.6,165.4 1294.7,165.3 1294.8,165.3 1295,165.3 
		1295.1,165.2 1295.3,165.2 1295.4,165.2 1295.6,165.1 1295.7,165.1 1295.9,165.1 1296,165 1296.2,165 1296.3,165 1296.5,164.9 
		1296.7,164.9 1296.9,164.9 1297.1,164.8 1297.4,164.8 1297.6,164.8 1297.8,164.8 1298.1,164.7 1298.4,164.7 1298.7,164.7 
		1298.9,164.6 1299.2,164.6 1299.5,164.6 1299.8,164.6 1300,164.6 1300.4,164.6 1300.8,164.6 1301.1,164.5 1301.5,164.5 
		1301.8,164.5 1302.4,164.5 1302.9,164.6 1303.5,164.6 1304,164.6 1304.6,164.6 1305.2,164.6 1306.3,164.7 1307.5,164.8 
		1308.7,164.9 1309.9,165 1311.1,165.2 1679.3,202.5 1679.5,202.6 1679.6,202.6 1679.8,202.6 1679.9,202.6 1680.1,202.6 
		1680.2,202.6 1680.4,202.6 1680.6,202.6 1680.7,202.6 1680.9,202.6 1681,202.6 1681.2,202.6 1681.4,202.6 1681.5,202.6 
		1681.7,202.6 1681.8,202.6 1682,202.6 1682.2,202.6 1682.3,202.6 1682.5,202.6 1682.6,202.5 1682.8,202.5 1682.9,202.5 
		1683.1,202.5 1683.2,202.5 1683.4,202.4 1683.5,202.4 1683.7,202.4 1683.8,202.4 1684,202.3 1684.1,202.3 1684.3,202.3 
		1684.4,202.3 1684.6,202.2 1684.7,202.2 1684.9,202.2 1685,202.1 1685.2,202.1 1685.3,202.1 1685.4,202 1685.6,202 1685.7,201.9 
		1685.8,201.9 1686,201.9 1686.1,201.8 1686.3,201.8 1686.4,201.7 1686.5,201.7 1686.6,201.6 1686.8,201.6 1686.9,201.6 1687,201.5 
		1687.1,201.5 1687.2,201.4 1687.3,201.4 1687.5,201.3 1687.6,201.3 1687.7,201.2 1687.8,201.2 1687.9,201.1 1688,201.1 1688.1,201 
		1688.2,201 1688.3,200.9 1688.4,200.9 1688.5,200.8 1688.6,200.8 1688.7,200.7 1688.8,200.7 1688.8,200.6 1688.9,200.6 1689,200.5 
		1689.1,200.5 1689.2,200.5 1689.2,200.4 1689.3,200.4 1689.4,200.3 1689.4,200.3 1689.5,200.2 1689.6,200.2 1689.7,200.1 
		1689.7,200.1 1689.8,200 1689.9,200 1689.9,199.9 1690,199.9 1690.1,199.8 1690.1,199.8 1690.2,199.7 1690.2,199.7 1690.3,199.6 
		1690.3,199.6 1690.4,199.6 1690.4,199.5 1690.5,199.5 1690.5,199.4 1690.6,199.4 1690.6,199.3 1690.7,199.3 1690.7,199.3 
		1690.8,199.2 1690.8,199.2 1690.9,199.1 1690.9,199.1 1690.9,199 1691,199 1691,198.9 1691.1,198.9 1691.1,198.9 1691.1,198.8 
		1691.2,198.8 1691.2,198.7 1691.2,198.7 1691.2,198.7 1691.3,198.6 1691.3,198.6 1691.3,198.5 1691.4,198.5 1691.4,198.5 
		1691.4,198.4 1691.5,198.4 1691.5,198.4 1691.5,198.3 1691.5,198.3 1691.6,198.2 1691.6,198.2 1691.6,198.2 1691.6,198.1 
		1691.6,198.1 1691.7,198.1 1691.7,198 1691.7,198 1691.7,198 1691.7,197.9 1691.8,197.9 1691.8,197.9 1691.8,197.8 1691.8,197.8 
		1691.8,197.7 1691.8,197.7 1691.9,197.7 1691.9,197.6 1691.9,197.6 1691.9,197.6 1691.9,197.5 1691.9,197.5 1691.9,197.5 
		1691.9,197.5 1692,197.4 1692,197.4 1692,197.4 1692,197.3 1692,197.3 1692,197.3 1692,197.2 1692,197.2 1692,197.2 1692.1,197.1 
		1692.1,197.1 1692.1,197.1 1692.1,197 1692.1,197 1692.1,197 1692.1,196.9 1692.1,196.9 1692.1,196.9 1692.1,196.9 1692.1,196.8 
		1692.1,196.8 1692.1,196.8 1692.1,196.7 1692.1,196.7 1692.1,196.7 1692.1,196.7 1692.1,196.6 1692.2,196.6 1692.2,196.6 
		1692.2,196.6 1692.2,196.5 1692.2,196.5 1692.2,196.5 1692.2,196.4 1692.2,196.4 1692.2,196.4 1692.2,196.4 1692.2,196.3 
		1692.2,196.3 1692.2,196.3 1692.2,196.2 1692.2,196.2 1692.2,196.2 1692.2,196.1 1692.2,196.1 1692.2,196.1 1692.2,196.1 
		1692.2,196 1692.1,196 1692.1,196 1692.1,195.9 1692.1,195.9 1692.1,195.9 1692.1,195.8 1692.1,195.8 1692.1,195.8 1692.1,195.8 
		1692.1,195.7 1692.1,195.7 1692.1,195.7 1692.1,195.6 1692.1,195.6 1692.1,195.6 1692.1,195.5 1692.1,195.5 1692.1,195.5 
		1692,195.4 1692,195.4 1692,195.4 1692,195.4 1692,195.3 1692,195.3 1692,195.3 1692,195.2 1692,195.2 1691.9,195.2 1691.9,195.1 
		1691.9,195.1 1691.9,195.1 1691.9,195.1 1691.9,195 1691.9,195 1691.9,195 1691.8,194.9 1691.8,194.9 1691.8,194.9 1691.8,194.8 
		1691.8,194.8 1691.8,194.8 1691.8,194.7 1691.7,194.7 1691.7,194.7 1691.7,194.6 1691.7,194.6 1691.7,194.6 1691.7,194.6 
		1691.6,194.5 1691.6,194.5 1691.6,194.5 1691.6,194.4 1691.6,194.4 1691.5,194.4 1691.5,194.3 1691.5,194.3 1691.5,194.3 
		1691.4,194.2 1691.4,194.2 1691.4,194.1 1691.4,194.1 1691.3,194.1 1691.3,194 1691.3,194 1691.2,193.9 1691.2,193.9 1691.2,193.9 
		1691.1,193.8 1691.1,193.8 1691.1,193.7 1691,193.7 1691,193.7 1691,193.6 1690.9,193.6 1690.9,193.5 1690.8,193.5 1690.8,193.5 
		1690.8,193.4 1690.7,193.4 1690.7,193.4 1690.6,193.3 1690.6,193.3 1690.6,193.2 1690.5,193.2 1690.4,193.1 1690.4,193.1 
		1690.3,193 1690.3,193 1690.2,193 1690.2,192.9 1690.1,192.9 1690.1,192.8 1690,192.8 1689.9,192.7 1689.8,192.6 1689.8,192.6 
		1689.7,192.5 1689.6,192.5 1689.5,192.4 1689.4,192.4 1689.3,192.3 1689.3,192.2 1689.2,192.2 1689.1,192.1 1689,192.1 1688.9,192 
		1688.8,192 1688.7,191.9 1688.6,191.8 1688.5,191.8 1688.4,191.7 1688.2,191.6 1688.1,191.6 1688,191.5 1687.8,191.4 1687.7,191.4 
		1687.6,191.3 1687.4,191.2 1687.2,191.1 1687.1,191.1 1686.9,191 1686.7,190.9 1686.5,190.8 1686.3,190.7 1686.1,190.7 
		1685.9,190.6 1685.7,190.5 1685.5,190.4 1685.2,190.3 1685,190.2 1684.8,190.1 1684.5,190 1684.2,190 1683.9,189.9 1683.6,189.8 
		1683.3,189.7 1683,189.6 1682.6,189.5 1682.3,189.4 1681.9,189.3 1681.5,189.2 1681.2,189.1 1680.8,189 1680.4,188.9 1032.9,37 
		1032.3,36.8 1031.7,36.7 1031,36.5 1030.4,36.4 1030.1,36.3 1029.8,36.3 1029.6,36.2 1029.3,36.2 1029,36.1 1028.8,36.1 
		1028.5,36.1 1028.3,36 1028.2,36 1028,36 1027.8,36 1027.6,36 1027.5,35.9 1027.3,35.9 1027.2,35.9 1027,35.9 1026.8,35.9 
		1026.7,35.9 1026.5,35.9 1026.4,35.9 1026.3,35.9 1026.2,35.9 1026,35.9 1025.9,35.9 1025.8,35.9 1025.7,35.9 1025.5,35.9 
		1025.4,35.9 1025.3,35.9 1025.2,35.9 1025.1,35.9 1025,35.9 1024.9,35.9 1024.8,35.9 1024.7,35.9 1024.6,36 1024.5,36 1024.4,36 
		1024.4,36 1024.3,36 1024.2,36 1024.1,36 1024,36.1 1023.9,36.1 1023.8,36.1 1023.8,36.1 1023.7,36.1 1023.6,36.1 1023.5,36.2 
		1023.4,36.2 1023.4,36.2 1023.3,36.2 1023.2,36.2 1023.1,36.3 1023.1,36.3 1023,36.3 1022.9,36.3 1022.9,36.3 1022.8,36.4 
		1022.7,36.4 1022.7,36.4 1022.6,36.4 1022.5,36.5 1022.5,36.5 1022.4,36.5 1022.4,36.5 1022.3,36.6 1022.2,36.6 1022.2,36.6 
		1022.1,36.6 1022.1,36.7 1022,36.7 1022,36.7 1021.9,36.7 1021.8,36.8 1021.8,36.8 1021.7,36.8 1021.7,36.8 1021.7,36.9 
		1021.6,36.9 1021.5,36.9 1021.5,37 1021.5,37 1021.4,37 1021.4,37 1021.3,37.1 1021.3,37.1 1021.2,37.1 1021.2,37.1 1021.1,37.2 
		1021.1,37.2 1021,37.2 1021,37.3 1021,37.3 1020.9,37.3 1020.9,37.4 1020.8,37.4 1020.8,37.4 1020.8,37.5 1020.7,37.5 1020.7,37.5 
		1020.6,37.6 1020.6,37.6 1020.6,37.6 1020.5,37.7 1020.5,37.7 1020.5,37.7 1020.4,37.8 1020.4,37.8 1020.4,37.8 1020.3,37.9 
		1020.3,37.9 1020.3,37.9 1020.2,38 1020.2,38 1020.2,38 1020.1,38.1 1020.1,38.1 1020.1,38.1 1020,38.2 1020,38.2 1020,38.3 
		1020,38.3 1019.9,38.3 1019.9,38.4 1019.9,38.4 1019.8,38.4 1019.8,38.5 1019.8,38.5 1019.8,38.5 1019.7,38.6 1019.7,38.6 
		1019.7,38.7 1019.7,38.7 1019.6,38.7 1019.6,38.8 1019.6,38.8 1019.6,38.8 1019.5,38.9 1019.5,38.9 1019.5,39 1019.5,39 
		1019.5,39.1 1019.4,39.1 1019.4,39.1 1019.4,39.2 1019.4,39.2 1019.4,39.3 1019.3,39.3 1019.3,39.3 1019.3,39.4 1019.3,39.4 
		1019.3,39.5 1019.3,39.5 1019.2,39.5 1019.2,39.6 1019.2,39.6 1019.2,39.7 1019.2,39.7 1019.2,39.7 1019.2,39.8 1019.1,39.8 
		1019.1,39.9 1019.1,39.9 1019.1,39.9 1019.1,40 1019.1,40 1019.1,40.1 1019.1,40.1 1019,40.2 1019,40.2 1019,40.2 1019,40.3 
		1019,40.3 1019,40.4 1019,40.4 1019,40.5 1019,40.5 1019,40.6 1019,40.6 1019,40.7 1019,40.7 1018.9,40.8 1018.9,40.8 1018.9,40.8 
		1018.9,40.9 1018.9,40.9 1018.9,41 1018.9,41 1018.9,41.1 1018.9,41.2 1018.9,41.2 1018.9,41.3 1018.9,41.3 1018.9,41.4 
		1018.9,41.4 1018.9,41.5 1018.9,41.5 1018.9,41.6 1018.9,41.6 1018.9,41.7 1018.9,41.7 1018.9,41.8 1018.9,41.8 1018.9,41.9 
		1018.9,41.9 1018.9,42 1018.9,42 1019,42.1 1019,42.1 1019,42.2 1019,42.3 1019,42.3 1019,42.4 1019,42.4 1019,42.5 1019,42.5 
		1019,42.6 1019,42.7 1019,42.7 1019.1,42.8 1019.1,42.9 1019.1,42.9 1019.1,43 1019.1,43.1 1019.2,43.1 1019.2,43.2 1019.2,43.3 
		1019.2,43.4 1019.2,43.4 1019.2,43.5 1019.3,43.6 1019.3,43.6 1019.3,43.7 1019.3,43.8 1019.4,43.9 1019.4,43.9 1019.4,44 
		1019.5,44.1 1019.5,44.2 1019.5,44.2 1019.5,44.3 1019.6,44.4 1019.6,44.5 1019.7,44.6 1019.7,44.6 1019.7,44.7 1019.8,44.8 
		1019.8,44.9 1019.9,45 1019.9,45.1 1020,45.2 1020,45.3 1020.1,45.4 1020.1,45.5 1020.2,45.6 1020.2,45.6 1020.3,45.7 1020.3,45.8 
		1020.4,45.9 1020.5,46 1020.5,46.1 1020.6,46.2 1020.7,46.3 1020.7,46.4 1020.8,46.5 1020.9,46.6 1020.9,46.7 1021,46.9 1021.1,47 
		1021.2,47.1 1021.3,47.2 1021.4,47.3 1021.5,47.4 1021.6,47.5 1021.7,47.7 1021.8,47.8 1021.8,47.9 1022,48 1022,48.1 1022.2,48.2 
		1022.3,48.4 1022.4,48.5 1022.5,48.6 1022.6,48.8 1022.8,48.9 1022.9,49 1023,49.2 1023.2,49.3 1023.3,49.5 1023.5,49.6 
		1023.7,49.8 1023.8,50 1024,50.1 1024.2,50.3 1024.4,50.4 1024.6,50.6 1024.8,50.8 1025,51 1025.2,51.2 1025.5,51.4 1025.7,51.6 
		1026,51.8 1026.2,51.9 1026.5,52.1 1026.8,52.3 1027,52.5 1027.3,52.7 1027.5,52.9 1085.8,93.8 1086,93.9 1086.1,94 1086.3,94.2 
		1086.4,94.3 1086.6,94.4 1086.7,94.5 1086.8,94.6 1087,94.8 1087.1,94.9 1087.2,95 1087.3,95.1 1087.5,95.2 1087.6,95.3 
		1087.7,95.4 1087.8,95.5 1087.9,95.6 1088,95.7 1088.1,95.8 1088.2,95.9 1088.3,96 1088.4,96.1 1088.4,96.2 1088.5,96.3 
		1088.6,96.4 1088.7,96.5 1088.8,96.6 1088.9,96.7 1088.9,96.8 1089,96.9 1089.1,97 1089.2,97.1 1089.2,97.2 1089.3,97.3 
		1089.3,97.3 1089.4,97.4 1089.5,97.5 1089.5,97.6 1089.6,97.7 1089.7,97.8 1089.7,97.9 1089.8,98 1089.8,98.1 1089.9,98.1 
		1089.9,98.2 1089.9,98.3 1090,98.4 1090,98.5 1090.1,98.5 1090.1,98.6 1090.2,98.7 1090.2,98.8 1090.2,98.8 1090.3,98.9 1090.3,99 
		1090.4,99.1 1090.4,99.2 1090.4,99.2 1090.5,99.3 1090.5,99.4 1090.5,99.5 1090.6,99.5 1090.6,99.6 1090.6,99.7 1090.7,99.8 
		1090.7,99.8 1090.7,99.9 1090.7,100 1090.8,100 1090.8,100.1 1090.8,100.2 1090.8,100.2 1090.8,100.3 1090.8,100.4 1090.9,100.4 
		1090.9,100.5 1090.9,100.6 1090.9,100.6 1090.9,100.7 1090.9,100.8 1091,100.8 1091,100.9 1091,101 1091,101 1091,101.1 
		1091,101.2 1091,101.2 1091.1,101.3 1091.1,101.4 1091.1,101.4 1091.1,101.5 1091.1,101.6 1091.1,101.6 1091.1,101.7 1091.1,101.8 
		1091.1,101.8 1091.1,101.9 1091.1,102 1091.1,102 1091.1,102.1 1091.1,102.1 1091.1,102.2 1091.1,102.2 1091.2,102.3 1091.2,102.4 
		1091.2,102.4 1091.2,102.5 1091.1,102.5 1091.1,102.6 1091.1,102.6 1091.1,102.7 1091.1,102.8 1091.1,102.8 1091.1,102.9 
		1091.1,102.9 1091.1,103 1091.1,103 1091.1,103.1 1091.1,103.1 1091.1,103.2 1091.1,103.2 1091.1,103.3 1091.1,103.4 1091.1,103.4 
		1091.1,103.5 1091,103.5 1091,103.5 1091,103.6 1091,103.6 1091,103.7 1091,103.7 1091,103.8 1091,103.8 1091,103.9 1090.9,103.9 
		1090.9,103.9 1090.9,104 1090.9,104 1090.9,104.1 1090.9,104.1 1090.9,104.2 1090.8,104.2 1090.8,104.2 1090.8,104.3 1090.8,104.3 
		1090.8,104.4 1090.8,104.4 1090.8,104.5 1090.7,104.5 1090.7,104.5 1090.7,104.6 1090.7,104.6 1090.7,104.7 1090.7,104.7 
		1090.6,104.7 1090.6,104.8 1090.6,104.8 1090.6,104.9 1090.5,104.9 1090.5,104.9 1090.5,105 1090.5,105 1090.5,105.1 1090.4,105.1 
		1090.4,105.1 1090.4,105.2 1090.4,105.2 1090.4,105.2 1090.3,105.3 1090.3,105.3 1090.3,105.3 1090.3,105.4 1090.2,105.4 
		1090.2,105.4 1090.2,105.5 1090.2,105.5 1090.1,105.6 1090.1,105.6 1090.1,105.6 1090,105.7 1090,105.7 1090,105.7 1090,105.8 
		1089.9,105.8 1089.9,105.8 1089.9,105.9 1089.8,105.9 1089.8,105.9 1089.8,106 1089.7,106 1089.7,106 1089.7,106.1 1089.6,106.1 
		1089.6,106.2 1089.6,106.2 1089.5,106.2 1089.5,106.3 1089.4,106.3 1089.4,106.3 1089.4,106.4 1089.3,106.4 1089.3,106.4 
		1089.2,106.5 1089.2,106.5 1089.2,106.5 1089.1,106.6 1089.1,106.6 1089.1,106.6 1089,106.6 1089,106.7 1088.9,106.7 1088.9,106.7 
		1088.8,106.8 1088.8,106.8 1088.7,106.8 1088.7,106.9 1088.6,106.9 1088.6,106.9 1088.6,106.9 1088.5,107 1088.4,107 1088.4,107 
		1088.3,107.1 1088.3,107.1 1088.2,107.1 1088.2,107.1 1088.1,107.2 1088.1,107.2 1088,107.2 1088,107.2 1087.9,107.3 1087.8,107.3 
		1087.8,107.3 1087.7,107.4 1087.7,107.4 1087.6,107.4 1087.5,107.4 1087.4,107.5 1087.4,107.5 1087.3,107.5 1087.2,107.6 
		1087.2,107.6 1087.1,107.6 1087,107.6 1086.9,107.7 1086.8,107.7 1086.8,107.7 1086.7,107.7 1086.6,107.8 1086.5,107.8 
		1086.4,107.8 1086.3,107.8 1086.2,107.9 1086.1,107.9 1086,107.9 1085.9,107.9 1085.8,108 1085.7,108 1085.6,108 1085.5,108 
		1085.4,108 1085.3,108.1 1085.2,108.1 1085.1,108.1 1084.9,108.1 1084.8,108.1 1084.6,108.2 1084.5,108.2 1084.3,108.2 
		1084.2,108.2 1084,108.2 1083.9,108.2 1083.7,108.3 1083.6,108.3 1083.4,108.3 1083.2,108.3 1083.1,108.3 1082.9,108.3 
		1082.7,108.3 1082.5,108.3 1082.3,108.3 1082.1,108.3 1081.9,108.3 1081.6,108.3 1081.4,108.3 1081.2,108.3 1080.9,108.3 
		1080.7,108.3 1080.4,108.3 1080.1,108.3 1079.9,108.3 1079.6,108.2 1079.2,108.2 1078.9,108.2 1078.6,108.2 1078.2,108.1 
		1077.9,108.1 1077.5,108 1077,108 1076.6,107.9 1076.1,107.9 1075.6,107.8 1075,107.7 1074.5,107.6 496.8,11.3 496.5,11.3 
		496.3,11.3 496.1,11.2 495.9,11.2 495.7,11.2 495.5,11.1 495.3,11.1 495.1,11.1 494.9,11.1 494.7,11.1 494.5,11 494.3,11 494.1,11 
		493.9,11 493.7,11 493.5,11 493.4,11 493.2,11 493,11 492.8,11 492.6,11 492.4,11 492.3,11 492.1,11 491.9,11 491.7,11 491.6,11 
		491.4,11 491.2,11 491,11.1 490.9,11.1 490.7,11.1 490.5,11.1 490.4,11.1 490.2,11.1 490,11.2 489.9,11.2 489.8,11.2 489.6,11.2 
		489.5,11.3 489.4,11.3 489.2,11.3 489.1,11.3 489,11.4 488.9,11.4 488.8,11.4 488.6,11.4 488.5,11.5 488.4,11.5 488.3,11.5 
		488.2,11.6 488.1,11.6 488,11.6 487.9,11.6 487.7,11.7 487.6,11.7 487.5,11.8 487.4,11.8 487.3,11.8 487.2,11.9 487.1,11.9 
		487,11.9 486.9,12 486.8,12 486.7,12.1 486.6,12.1 486.6,12.1 486.5,12.2 486.4,12.2 486.3,12.2 486.3,12.3 486.2,12.3 486.1,12.3 
		486,12.4 486,12.4 485.9,12.4 485.8,12.5 485.7,12.5 485.7,12.6 485.6,12.6 485.5,12.6 485.5,12.7 485.4,12.7 485.3,12.8 
		485.3,12.8 485.2,12.8 485.2,12.9 485.1,12.9 485.1,12.9 485,13 485,13 484.9,13.1 484.9,13.1 484.8,13.1 484.8,13.2 484.7,13.2 
		484.7,13.2 484.6,13.3 484.6,13.3 484.5,13.4 484.5,13.4 484.5,13.4 484.4,13.5 484.4,13.5 484.3,13.5 484.3,13.6 484.2,13.6 
		484.2,13.7 484.2,13.7 484.1,13.7 484.1,13.8 484.1,13.8 484.1,13.8 484,13.8 484,13.9 484,13.9 483.9,13.9 483.9,14 483.9,14 
		483.9,14 483.8,14.1 483.8,14.1 483.8,14.1 483.8,14.2 483.7,14.2 483.7,14.2 483.7,14.3 483.7,14.3 483.6,14.3 483.6,14.4 
		483.6,14.4 483.6,14.4 483.5,14.5 483.5,14.5 483.5,14.5 483.5,14.6 483.4,14.6 483.4,14.6 483.4,14.7 483.4,14.7 483.4,14.7 
		483.3,14.8 483.3,14.8 483.3,14.9 483.3,14.9 483.3,14.9 483.3,15 483.2,15 483.2,15 483.2,15 483.2,15.1 483.2,15.1 483.2,15.1 
		483.2,15.2 483.1,15.2 483.1,15.2 483.1,15.3 483.1,15.3 483.1,15.3 483.1,15.4 483.1,15.4 483.1,15.4 483,15.5 483,15.5 483,15.6 
		483,15.6 483,15.6 483,15.7 483,15.7 483,15.7 483,15.7 483,15.8 482.9,15.8 482.9,15.8 482.9,15.9 482.9,15.9 482.9,16 482.9,16 
		482.9,16 482.9,16.1 482.9,16.1 482.9,16.1 482.9,16.2 482.9,16.2 482.9,16.2 482.9,16.3 482.9,16.3 482.9,16.3 482.9,16.4 
		482.9,16.4 482.9,16.4 482.9,16.5 482.8,16.5 482.8,16.5 482.8,16.6 482.8,16.6 482.8,16.7 482.8,16.7 482.8,16.7 482.8,16.8 
		482.8,16.8 482.8,16.8 482.8,16.9 482.8,16.9 482.8,17 482.9,17 482.9,17 482.9,17.1 482.9,17.1 482.9,17.2 482.9,17.2 482.9,17.3 
		482.9,17.3 482.9,17.3 482.9,17.4 482.9,17.4 482.9,17.5 482.9,17.5 482.9,17.6 482.9,17.6 482.9,17.6 482.9,17.7 483,17.7 
		483,17.8 483,17.8 483,17.8 483,17.9 483,17.9 483,18 483,18 483.1,18.1 483.1,18.1 483.1,18.2 483.1,18.2 483.1,18.2 483.1,18.3 
		483.1,18.3 483.2,18.4 483.2,18.4 483.2,18.5 483.2,18.5 483.2,18.6 483.3,18.6 483.3,18.7 483.3,18.7 483.3,18.8 483.4,18.9 
		483.4,18.9 483.4,19 483.4,19 483.5,19.1 483.5,19.1 483.5,19.2 483.6,19.2 483.6,19.3 483.6,19.3 483.7,19.4 483.7,19.5 
		483.7,19.5 483.8,19.6 483.8,19.7 483.8,19.7 483.9,19.8 483.9,19.8 484,19.9 484,20 484.1,20 484.1,20.1 484.2,20.2 484.2,20.2 
		484.3,20.3 484.3,20.3 484.4,20.4 484.4,20.5 484.5,20.6 484.5,20.6 484.6,20.7 484.6,20.8 484.7,20.8 484.8,20.9 484.8,21 
		484.9,21.1 485,21.1 485.1,21.2 485.1,21.3 485.2,21.4 485.3,21.5 485.4,21.5 485.5,21.6 485.6,21.7 485.7,21.8 485.8,21.9 
		485.9,22 486,22.1 486.1,22.2 486.2,22.3 486.3,22.4 486.4,22.5 486.6,22.6 486.7,22.7 486.8,22.8 487,22.9 487.1,23 487.3,23.1 
		487.4,23.2 573,84.3 573,84.4 573.1,84.4 573.1,84.4 573.2,84.5 573.2,84.5 573.2,84.5 573.3,84.6 573.4,84.6 573.4,84.7 
		573.5,84.8 573.6,84.8 573.6,84.9 573.7,84.9 573.8,85 573.8,85.1 573.9,85.1 574,85.2 574,85.2 574.1,85.3 574.2,85.4 574.3,85.5 
		574.3,85.5 574.4,85.6 574.5,85.7 574.6,85.8 574.6,85.9 574.7,86 574.8,86.1 574.9,86.2 575,86.3 575,86.3 575.1,86.4 575.2,86.5 
		575.3,86.6 575.3,86.7 575.4,86.8 575.5,86.9 575.5,87 575.6,87.1 575.6,87.1 575.7,87.2 575.7,87.3 575.8,87.4 575.9,87.5 
		575.9,87.6 576,87.6 576,87.7 576,87.8 576.1,87.9 576.1,87.9 576.2,88 576.2,88.1 576.2,88.1 576.3,88.2 576.3,88.3 576.3,88.4 
		576.4,88.4 576.4,88.5 576.4,88.5 576.5,88.6 576.5,88.7 576.5,88.7 576.5,88.8 576.6,88.9 576.6,88.9 576.6,89 576.6,89 
		576.6,89.1 576.7,89.1 576.7,89.2 576.7,89.2 576.7,89.3 576.7,89.3 576.7,89.4 576.8,89.4 576.8,89.5 576.8,89.5 576.8,89.6 
		576.8,89.6 576.8,89.7 576.8,89.7 576.8,89.8 576.9,89.8 576.9,89.8 576.9,89.9 576.9,89.9 576.9,90 576.9,90 576.9,90.1 
		576.9,90.1 576.9,90.1 576.9,90.2 576.9,90.2 576.9,90.3 576.9,90.3 576.9,90.3 576.9,90.4 576.9,90.4 576.9,90.4 576.9,90.5 
		576.9,90.5 577,90.5 577,90.6 577,90.6 577,90.7 577,90.7 577,90.7 577,90.8 577,90.8 577,90.8 577,90.9 577,90.9 576.9,90.9 
		576.9,91 576.9,91 576.9,91 576.9,91.1 576.9,91.1 576.9,91.1 576.9,91.2 576.9,91.2 576.9,91.2 576.9,91.2 576.9,91.3 576.9,91.3 
		576.9,91.3 576.9,91.4 576.9,91.4 576.9,91.4 576.9,91.4 576.9,91.5 576.9,91.5 576.9,91.5 576.9,91.6 576.8,91.6 576.8,91.6 
		576.8,91.6 576.8,91.7 576.8,91.7 576.8,91.7 576.8,91.7 576.8,91.8 576.8,91.8 576.8,91.8 576.8,91.9 576.8,91.9 576.7,91.9 
		576.7,91.9 576.7,92 576.7,92 576.7,92 576.7,92 576.7,92.1 576.7,92.1 576.7,92.1 576.6,92.1 576.6,92.2 576.6,92.2 576.6,92.2 
		576.6,92.2 576.6,92.3 576.6,92.3 576.6,92.3 576.5,92.3 576.5,92.4 576.5,92.4 576.5,92.4 576.5,92.4 576.5,92.5 576.5,92.5 
		576.4,92.5 576.4,92.5 576.4,92.6 576.4,92.6 576.4,92.6 576.4,92.6 576.3,92.7 576.3,92.7 576.3,92.7 576.3,92.7 576.3,92.8 
		576.2,92.8 576.2,92.8 576.2,92.8 576.2,92.9 576.2,92.9 576.1,92.9 576.1,93 576.1,93 576.1,93 576,93 576,93.1 576,93.1 
		576,93.1 576,93.1 575.9,93.2 575.9,93.2 575.9,93.2 575.8,93.2 575.8,93.2 575.8,93.3 575.8,93.3 575.7,93.3 575.7,93.4 
		575.7,93.4 575.6,93.4 575.6,93.4 575.6,93.5 575.5,93.5 575.5,93.5 575.5,93.5 575.4,93.6 575.4,93.6 575.4,93.6 575.3,93.6 
		575.3,93.7 575.3,93.7 575.2,93.7 575.2,93.8 575.1,93.8 575.1,93.8 575,93.8 575,93.9 575,93.9 574.9,93.9 574.9,93.9 574.8,94 
		574.8,94 574.7,94 574.7,94 574.6,94.1 574.6,94.1 574.5,94.1 574.4,94.2 574.4,94.2 574.3,94.2 574.3,94.3 574.2,94.3 574.1,94.3 
		574.1,94.3 574,94.4 573.9,94.4 573.9,94.4 573.8,94.4 573.7,94.5 573.7,94.5 573.6,94.5 573.5,94.5 573.4,94.6 573.3,94.6 
		573.2,94.6 573.1,94.7 573.1,94.7 573,94.7 572.9,94.7 572.8,94.8 572.6,94.8 572.5,94.8 572.4,94.9 572.3,94.9 572.2,94.9 
		572.1,94.9 572,95 571.8,95 571.7,95 571.6,95 571.4,95.1 571.3,95.1 571.1,95.1 570.9,95.1 570.7,95.2 570.5,95.2 570.3,95.2 
		570.1,95.2 569.9,95.3 569.7,95.3 569.5,95.3 569.3,95.3 569.1,95.3 568.9,95.3 568.6,95.4 568.3,95.4 568.1,95.4 567.8,95.4 
		567.5,95.4 567.3,95.4 567,95.4 566.7,95.4 566.4,95.4 566,95.4 565.7,95.4 565.3,95.4 565,95.3 564.6,95.3 564.3,95.3 564,95.3 
		563.7,95.2 563.3,95.2 563,95.2 562.6,95.1 562.3,95.1 561.9,95.1 561.6,95 93,32.5 92.6,32.5 92.3,32.5 92,32.4 91.6,32.4 
		91.3,32.3 91,32.3 90.7,32.3 90.4,32.3 90.1,32.3 89.9,32.2 89.6,32.2 89.3,32.2 89.1,32.2 88.9,32.2 88.6,32.2 88.4,32.2 
		88.2,32.2 88,32.2 87.8,32.2 87.6,32.2 87.5,32.2 87.3,32.2 87.1,32.2 87,32.2 86.8,32.2 86.6,32.3 86.5,32.3 86.4,32.3 86.2,32.3 
		86.1,32.3 86,32.3 85.8,32.3 85.7,32.4 85.6,32.4 85.5,32.4 85.4,32.4 85.2,32.4 85.1,32.5 85,32.5 84.9,32.5 84.8,32.5 84.8,32.5 
		84.7,32.5 84.6,32.6 84.5,32.6 84.4,32.6 84.3,32.6 84.3,32.7 84.2,32.7 84.1,32.7 84,32.7 84,32.7 83.9,32.8 83.8,32.8 83.8,32.8 
		83.7,32.8 83.6,32.8 83.6,32.9 83.5,32.9 83.4,32.9 83.4,32.9 83.3,33 83.3,33 83.2,33 83.2,33 83.1,33.1 83.1,33.1 83,33.1 
		83,33.1 82.9,33.2 82.9,33.2 82.8,33.2 82.8,33.2 82.7,33.3 82.7,33.3 82.6,33.3 82.6,33.3 82.6,33.3 82.5,33.4 82.5,33.4 
		82.5,33.4 82.4,33.4 82.4,33.4 82.4,33.5 82.3,33.5 82.3,33.5 82.3,33.5 82.2,33.6 82.2,33.6 82.2,33.6 82.1,33.6 82.1,33.7 
		82.1,33.7 82,33.7 82,33.7 82,33.7 82,33.8 81.9,33.8 81.9,33.8 81.9,33.8 81.9,33.9 81.8,33.9 81.8,33.9 81.8,33.9 81.8,34 
		81.7,34 81.7,34 81.7,34 81.7,34.1 81.6,34.1 81.6,34.1 81.6,34.1 81.6,34.1 81.6,34.2 81.6,34.2 81.5,34.2 81.5,34.2 81.5,34.2 
		81.5,34.3 81.5,34.3 81.4,34.3 81.4,34.3 81.4,34.4 81.4,34.4 81.4,34.4 81.4,34.4 81.4,34.4 81.3,34.5 81.3,34.5 81.3,34.5 
		81.3,34.5 81.3,34.6 81.3,34.6 81.3,34.6 81.2,34.6 81.2,34.6 81.2,34.7 81.2,34.7 81.2,34.7 81.2,34.7 81.2,34.7 81.2,34.8 
		81.1,34.8 81.1,34.8 81.1,34.8 81.1,34.9 81.1,34.9 81.1,34.9 81.1,34.9 81.1,35 81.1,35 81,35 81,35 81,35 81,35.1 81,35.1 
		81,35.1 81,35.1 81,35.2 81,35.2 81,35.2 81,35.2 81,35.3 81,35.3 80.9,35.3 80.9,35.3 80.9,35.4 80.9,35.4 80.9,35.4 80.9,35.4 
		80.9,35.4 80.9,35.5 80.9,35.5 80.9,35.5 80.9,35.5 80.9,35.6 80.9,35.6 80.9,35.6 80.9,35.6 80.9,35.7 80.9,35.7 80.9,35.7 
		80.9,35.8 80.9,35.8 80.9,35.8 80.9,35.8 80.8,35.9 80.8,35.9 80.8,35.9 80.8,35.9 80.8,36 80.8,36 80.8,36 80.8,36.1 80.8,36.1 
		80.8,36.1 80.8,36.1 80.8,36.2 80.8,36.2 80.8,36.2 80.8,36.3 80.8,36.3 80.8,36.3 80.9,36.3 80.9,36.4 80.9,36.4 80.9,36.4 
		80.9,36.4 80.9,36.5 80.9,36.5 80.9,36.5 80.9,36.6 80.9,36.6 80.9,36.6 80.9,36.7 80.9,36.7 80.9,36.7 80.9,36.7 80.9,36.8 
		80.9,36.8 80.9,36.8 80.9,36.9 80.9,36.9 80.9,36.9 81,37 81,37 81,37 81,37.1 81,37.1 81,37.1 81,37.2 81,37.2 81,37.2 81.1,37.3 
		81.1,37.3 81.1,37.3 81.1,37.4 81.1,37.4 81.1,37.5 81.1,37.5 81.2,37.5 81.2,37.6 81.2,37.6 81.2,37.7 81.2,37.7 81.3,37.7 
		81.3,37.8 81.3,37.8 81.3,37.9 81.3,37.9 81.3,37.9 81.4,38 81.4,38 81.4,38.1 81.4,38.1 81.5,38.1 81.5,38.2 81.5,38.2 81.5,38.3 
		81.6,38.3 81.6,38.4 81.6,38.4 81.7,38.4 81.7,38.5 81.7,38.5 81.8,38.6 81.8,38.6 81.8,38.7 81.9,38.7 81.9,38.8 82,38.8 82,38.9 
		82,38.9 82.1,39 82.1,39 82.2,39.1 82.2,39.1 82.2,39.2 82.3,39.2 82.3,39.3 82.4,39.3 82.4,39.4 82.5,39.4 82.5,39.5 82.6,39.5 
		82.6,39.6 82.7,39.6 82.7,39.7 82.8,39.7 82.8,39.8 82.9,39.8 83,39.9 83,39.9 83.1,40 83.2,40.1 83.2,40.1 83.3,40.2 83.4,40.2 
		83.4,40.3 83.5,40.3 83.6,40.4 83.7,40.5 83.7,40.5 83.8,40.6 83.9,40.6 84,40.7 84.1,40.8 84.2,40.8 84.3,40.9 84.4,41 84.5,41 
		84.6,41.1 84.7,41.2 84.8,41.3 84.9,41.3 85.1,41.4 85.2,41.5 85.3,41.5 85.4,41.6 85.5,41.7 85.7,41.7 85.8,41.8 85.9,41.8 
		86.1,41.9 86.2,42 86.4,42.1 86.5,42.1 86.7,42.2 86.9,42.3 87,42.4 87.2,42.4 87.4,42.5 87.6,42.6 87.8,42.7 88,42.7 88.2,42.8 
		88.4,42.9 88.6,43 88.9,43.1 89.1,43.1 89.4,43.2 89.6,43.3 89.9,43.4 90.1,43.5 90.4,43.5 90.6,43.6 90.9,43.7 91.2,43.7 
		91.4,43.8 91.7,43.9 92,44 841.3,223 842.3,223.3 843.3,223.5 844.2,223.7 845.1,223.9 845.7,224 846.4,224.1 847,224.3 
		847.6,224.4 848,224.5 848.5,224.5 848.9,224.6 849.3,224.7 849.7,224.7 850,224.8 850.3,224.8 850.5,224.8 850.8,224.9 
		851.1,224.9 851.3,224.9 851.5,224.9 851.8,225 852,225 852.1,225 852.3,225 852.5,225 852.6,225 852.8,225 852.9,225 853.1,225 
		853.2,225 853.3,225 853.4,225 853.5,225 853.6,225 853.7,225 853.8,225 854,225 854.1,225 854.2,225 854.2,225 854.3,225 
		854.4,225 854.5,225 854.6,224.9 854.7,224.9 854.7,224.9 854.8,224.9 854.9,224.9 854.9,224.9 855,224.9 855.1,224.9 855.1,224.9 
		855.2,224.9 855.2,224.8 855.3,224.8 855.3,224.8 855.4,224.8 855.4,224.8 855.5,224.8 855.5,224.8 855.6,224.8 855.6,224.8 
		855.7,224.7 855.7,224.7 855.8,224.7 855.8,224.7 855.9,224.7 855.9,224.7 856,224.7 856,224.6 856.1,224.6 856.1,224.6 
		856.2,224.6 856.2,224.6 856.2,224.6 856.3,224.5 856.3,224.5 856.4,224.5 856.4,224.5 856.4,224.5 856.5,224.5 856.5,224.5 
		856.5,224.4 856.6,224.4 856.6,224.4 856.6,224.4 856.7,224.4 856.7,224.4 856.7,224.3 856.8,224.3 856.8,224.3 856.8,224.3 
		856.9,224.3 856.9,224.2 856.9,224.2 857,224.2 857,224.2 857,224.2 857.1,224.1 857.1,224.1 857.1,224.1 857.1,224.1 857.2,224.1 
		857.2,224.1 857.2,224 857.2,224 857.3,224 857.3,224 857.3,223.9 857.4,223.9 857.4,223.9 857.4,223.9 857.4,223.9 857.5,223.8 
		857.5,223.8 857.5,223.8 857.5,223.8 857.6,223.8 857.6,223.7 857.6,223.7 857.6,223.7 857.6,223.7 857.7,223.6 857.7,223.6 
		857.7,223.6 857.7,223.6 857.8,223.5 857.8,223.5 857.8,223.5 857.8,223.5 857.9,223.4 857.9,223.4 857.9,223.4 857.9,223.3 
		858,223.3 858,223.3 858,223.2 858,223.2 858.1,223.2 858.1,223.2 858.1,223.1 858.1,223.1 858.1,223.1 858.2,223 858.2,223 
		858.2,223 858.2,222.9 858.3,222.9 858.3,222.9 858.3,222.8 858.3,222.8 858.3,222.7 858.4,222.7 858.4,222.7 858.4,222.6 
		858.4,222.6 858.5,222.5 858.5,222.5 858.5,222.5 858.5,222.4 858.5,222.4 858.6,222.3 858.6,222.3 858.6,222.2 858.6,222.2 
		858.6,222.2 858.6,222.1 858.7,222.1 858.7,222 858.7,222 858.7,221.9 858.7,221.9 858.7,221.9 858.7,221.8 858.8,221.8 
		858.8,221.7 858.8,221.7 858.8,221.6 858.8,221.6 858.8,221.5 858.8,221.5 858.8,221.5 858.9,221.4 858.9,221.4 858.9,221.3 
		858.9,221.3 858.9,221.2 858.9,221.2 858.9,221.1 858.9,221.1 858.9,221.1 858.9,221 858.9,221 858.9,220.9 858.9,220.9 859,220.8 
		859,220.8 859,220.7 859,220.7 859,220.7 859,220.6 859,220.6 859,220.5 859,220.5 859,220.4 859,220.4 859,220.4 859,220.3 
		859,220.3 859,220.2 859,220.2 859,220.1 859,220.1 859,220.1 859,220 859,220 859,220 859,219.9 859,219.9 859,219.9 858.9,219.8 
		858.9,219.8 858.9,219.8 858.9,219.7 858.9,219.7 858.9,219.7 858.9,219.6 858.9,219.6 858.9,219.6 858.9,219.5 858.9,219.5 
		858.9,219.4 858.9,219.4 858.9,219.4 858.9,219.3 858.8,219.3 858.8,219.3 858.8,219.2 858.8,219.2 858.8,219.2 858.8,219.1 
		858.8,219.1 858.8,219 858.8,219 858.7,219 858.7,218.9 858.7,218.9 858.7,218.9 858.7,218.8 858.7,218.8 858.7,218.8 858.6,218.7 
		858.6,218.7 858.6,218.6 858.6,218.6 858.6,218.6 858.6,218.5 858.5,218.5 858.5,218.4 858.5,218.4 858.5,218.4 858.5,218.3 
		858.4,218.3 858.4,218.3 858.4,218.2 858.4,218.2 858.3,218.1 858.3,218.1 858.3,218.1 858.3,218 858.2,218 858.2,217.9 
		858.2,217.9 858.2,217.8 858.1,217.8 858.1,217.8 858.1,217.7 858,217.7 858,217.6 858,217.6 857.9,217.5 857.9,217.5 857.8,217.4 
		857.8,217.4 857.8,217.3 857.7,217.3 857.7,217.2 857.6,217.2 857.6,217.1 857.5,217 857.5,217 857.4,216.9 857.3,216.9 
		857.3,216.8 857.2,216.7 857.1,216.6 857.1,216.6 857,216.5 856.9,216.4 856.8,216.3 856.7,216.2 856.6,216.1 856.5,216 
		856.3,215.9 856.2,215.8 856,215.6 855.8,215.5 855.7,215.4 855.5,215.2 855.1,214.9 854.7,214.6 854.3,214.2 853.8,213.9 	"
        />
        <line x1="1333.1" y1="204.8" x2="1333.1" y2="204.9" />
        <line x1="403.7" y1="119.1" x2="406.5" y2="119.1" />
        <line x1="783.4" y1="149" x2="783.4" y2="149" />
      </g>
    </svg>
  );
};
