const React = require('react');

class NotFound extends React.Component {
  render(){
    return (
      <div className="landing-container">
        <div className="drawing">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 2829.3333 2829.3333">
            <g id="g10" transform="matrix(1.3333333,0,0,-1.3333333,0,2829.3333), scale(0.1)">
              <path d="m 18784.3,8513.7 c -25.5,40.2 -58.2,76.5 -96.4,106.5 -169.1,132.1 -398.4,96.9 -588.3,35.3 -410.6,-133 -812.8,-320.5 -1182.2,-542.8 -182.6,-110 -358,-231.7 -524.3,-365.2 -177.7,-142.5 -340.9,-302.4 -520.4,-442.7 -183.1,-143.2 -387.4,-254.7 -592.7,-362.1 -210.1,-109.9 -420.4,-219 -630.6,-328.5 -222.1,-115.7 -452.3,-255.5 -706,-283.7 -170.1,-18.9 -361,22 -482.1,146.7 34.2,7.7 68.3,16.3 102,26.6 333.3,101.7 547.1,344.7 750.8,613.5 194.7,257 407,485.6 672.9,670.6 247.8,172.3 519.9,308 798.5,422.8 578,237.9 1184.7,397 1763.6,632 290.9,118.1 582.9,251.6 840.9,432 115.3,80.6 223.5,175.1 310.7,283.9 15.4,-236.1 36.6,-471.9 65,-707.4 13.6,-112.5 33.6,-224.7 18.6,-337.5 z m -70.5,-215.4 c -22.9,-43.6 -49.8,-85.1 -82.2,-122.3 -78.3,-89.8 -177.9,-153.7 -290.8,-190.7 -136.8,-44.9 -271.7,-92.8 -404.6,-148.5 -542.6,-227.7 -1043.7,-539.1 -1552.4,-831.6 -241.7,-138.9 -490.4,-264.9 -731.7,-404.3 -236.5,-136.8 -467.9,-282.4 -706,-416.3 -474.2,-266.6 -995.5,-486 -1539.1,-383.8 21.5,21.7 40.8,46.6 56.6,76.4 65.8,123.6 62.1,279.8 25.1,421.3 229.6,-137.2 541.4,-105.5 789.8,-4.6 205,83.3 399,194.4 595,296.5 204,106.3 409.4,210.3 611.6,320.1 197.1,107 383.1,227.4 555.7,370.7 169.2,140.7 328.5,293 503,427.3 336.6,258.8 710.7,466.7 1099.1,636.5 109,47.6 219.4,91.9 330.8,133.6 117.9,44.1 240.2,92.8 366.5,105.1 107.5,10.4 218.2,-6.1 297.5,-84.6 52.8,-52.2 90.3,-127.7 76.1,-200.8 z M 13383,6039.1 c -34.5,-278.6 -349,-237.1 -551.7,-200.7 -243.9,43.8 -489.9,72.6 -737.6,81.8 -1009.1,37.7 -2030.1,-224 -2895.69,-744.3 -216.92,-130.4 -419.77,-279.3 -617.81,-436.4 -201.29,-160 -406.92,-327.7 -647.39,-425.3 -502.03,-203.9 -1055.9,-2.5 -1448.04,335.1 -415.36,357.5 -702.74,844.3 -996.88,1299.9 -313.79,486 -609.45,986.2 -795.86,1536.5 -93.75,277 -169.49,560.2 -281.8,830.6 -106.05,255.5 -242.3,496.3 -390.85,729.2 -312.54,490.1 -651.45,962.4 -958.36,1456.4 -159.11,256.1 -313.68,515 -463.72,776.5 -69.88,121.8 -169.88,257.2 -174.68,402.4 -3.95,120.2 79.57,214.9 157.18,296.7 157.9,166.3 281.92,327.5 325.75,558.6 43.79,230.7 21.68,467 5.62,699.2 -13.01,187.8 -23.51,377.8 4.06,563.9 558.79,-788.9 1114.73,-1580.3 1634.03,-2396 543.87,-854.5 1047.85,-1736.5 1464.37,-2660.5 187.42,-415.7 333.05,-849.7 525.86,-1262.6 160.86,-344.6 386.21,-691.3 745.24,-852.9 419.53,-188.8 870.43,-77.9 1274.96,94.4 455.11,193.9 875.86,453.7 1357.89,581.1 674.42,178.4 1374.22,133.2 2031.62,-68 -421.4,29.2 -851.2,-28.8 -1254.1,-141.5 -552.4,-154.3 -1075.96,-397.6 -1632.44,-538.5 -597.86,-151.4 -1228.79,-170.1 -1842.89,-173 -144.07,-0.6 -292,5.3 -428.52,55.7 -130.86,48.2 -237.46,137.8 -330.23,239.9 -174.34,191.8 -319.77,415.2 -457.27,634.2 -273.63,436 -500.74,899.1 -711.8,1367.9 -424.29,942.4 -786.29,1921.2 -1343.75,2796.8 -133.36,209.4 -278.08,411.1 -434.33,604.1 -41.37,51 -118.17,-4.9 -104.26,-60.7 376.48,-1512.6 771.52,-3045.3 1531.68,-4418.5 338.55,-611.6 747.58,-1188.3 1238.83,-1687.1 127.07,-129 259.57,-252.6 397.42,-369.9 129.84,-110.4 264.3,-229.3 417.03,-306.9 339.61,-172.7 700.43,-33.2 1017.7,121 703,341.8 1424.18,621.4 2185.63,803.7 757.9,181.5 1536.5,273.6 2315.9,272 258.3,-0.4 524.1,-18.4 782.2,14.3 69.4,-121.1 105.7,-257.7 87,-409.1 z m -7849.02,8139 c 446.45,170.4 893.79,350.8 1366.22,435.7 432.14,77.6 880.58,64.6 1308.9,-30.1 439.65,-97.3 859.26,-280.1 1227.23,-539.3 -5.86,-13.4 -7.62,-28.4 -3.67,-41.7 297.54,-998.5 597.84,-2001.1 1036.64,-2948.6 445.2,-961.7 1076.8,-1819.4 1641.7,-2711.9 281.1,-444 551,-895.5 791.3,-1362.9 -82.9,45.1 -169.6,83.5 -257.3,115.4 -693.9,332.8 -1463.3,510.6 -2235,425.3 -475.39,-52.4 -913.05,-207.1 -1339.92,-417.5 -416.64,-205.2 -865.78,-466.8 -1345.55,-451.9 -435.08,13.5 -750.66,300.1 -957.73,660.3 -215.59,375.2 -344.53,796.5 -513.36,1193.3 -392.81,923.1 -876.72,1804.8 -1404.85,2656.9 -533.12,860.2 -1111.48,1691.1 -1695.46,2517.2 -67.35,95.2 -134.73,190.4 -202.15,285.5 835.23,-389 1771.48,-95.6 2583,214.3 z m 4491.52,-634.9 c 155.8,-222.7 301.6,-453.2 448.1,-682 304.4,-475.6 597.8,-958.1 879.9,-1447.3 284.7,-493.5 557.9,-993.7 819.3,-1500 243.3,-471.1 510.6,-945.6 662.8,-1455.7 137.6,-461.2 206.1,-949.9 182.6,-1432.2 -451.8,881.6 -1009.1,1703.4 -1547.8,2533.4 -286.3,441.2 -566.5,883.8 -797.9,1356.9 -228.5,466.9 -419.6,950.9 -590.8,1441.4 -182.05,521.6 -341.5,1050.6 -499.4,1579.9 190.9,-60.5 331.84,-235.3 443.2,-394.4 z m 713.1,1666.8 c 597,231 1221.5,379.7 1831.5,570.9 591.8,185.5 1184.1,412.7 1684.1,788 121.8,91.5 236.6,190.5 345.7,296.8 106.2,103.6 259.4,180.2 398.2,89.5 109.5,-71.4 174.6,-204.8 220.9,-322.7 63.5,-161.7 110.7,-330.7 165.8,-495.4 244.7,-731.9 512.5,-1459.4 869.5,-2144.9 346,-664.1 773.9,-1281.5 1226.8,-1876.5 228.7,-300.5 463.9,-595.9 699.9,-890.7 197.6,-246.9 479.9,-579.9 402,-922.5 -39.2,-172.3 -172.6,-292.7 -311.5,-390.2 -143.1,-100.4 -291.9,-193.7 -439.7,-286.8 -312.8,-197 -637.2,-382.6 -987.7,-504 -356.6,-123.4 -725.9,-148.5 -1097.7,-191.9 -375.2,-43.9 -723.8,-134.5 -1052.6,-325.1 -573.9,-332.7 -1056.5,-838.2 -1436.2,-1377 -39.4,-56 -77.4,-113 -114.2,-170.7 17,424.3 -35.5,853.3 -140.1,1263.2 -134.8,528 -391.4,1008.1 -637.7,1490.9 -536.5,1052.1 -1123.8,2078.4 -1759.2,3073.9 -167.5,262.5 -331.2,531.6 -516.8,781.9 -115.11,155.3 -250.34,298.5 -424.95,370.4 -41.95,594.7 587.85,984.9 1073.95,1172.9 z m 2475.7,-8643.8 c -111.9,-10.4 -225,-12.5 -335.8,-11.9 -362.1,1.9 -722.2,5.2 -1083.8,-20.6 C 11420.2,6507 11047.2,6459.2 10678.1,6391 9945,6255.6 9228.44,6037.6 8543.44,5743.7 8369.18,5668.9 8197.62,5588.6 8027.7,5504.6 7862.89,5423 7695.9,5340.4 7515.35,5300 c -188.75,-42.1 -367.34,-15.7 -531.83,87 -150.9,94.3 -287.66,216.5 -420.24,334.5 -511.37,455.4 -941.56,995.1 -1300.58,1576.9 -792.58,1284.3 -1222.66,2745 -1592.66,4196.5 -22.42,88.1 -44.3,176.3 -66.45,264.5 538.09,-737.1 904.85,-1584 1264.38,-2418.9 393.67,-914.2 789.14,-1850.4 1409.88,-2638.2 158.44,-201.2 347.19,-368.5 605.28,-419.3 270.74,-53.4 561.32,-23 835.15,-13.6 590.9,20.4 1168.48,86 1733.05,268.3 530.43,171.4 1043.97,401.6 1592.77,511.8 505.4,101.4 1078.4,108.5 1568.1,-76.6 33.2,-16.1 66.5,-32 99.3,-48.9 104.2,-53.8 206.2,-111.5 306.8,-171.8 72.7,-55.1 139.5,-117.2 196,-186 z m 5474.4,3201 c -49.2,-91.4 -114.8,-175.4 -188.6,-245.1 -224.9,-212.5 -519.4,-355.7 -799.6,-480.6 -559.5,-249.5 -1153.8,-407.9 -1726.2,-623.4 -539.9,-203.2 -1073.1,-462.3 -1477.5,-884.1 -221.3,-230.9 -376.9,-524.9 -625.4,-729.4 -150.9,-124.2 -328.3,-187.5 -514.2,-219.5 -58.9,86.6 -131.1,163.5 -212.6,231.2 162,286.6 360.2,552.2 577.9,798.6 232.7,263.5 489.4,512.2 776.5,716.2 320.6,227.6 666.4,384.8 1055.7,447.6 380.2,61.4 768.5,64 1141.7,166.5 358.1,98.2 692.7,267.2 1010.1,456.9 164.2,98.1 324.8,202.3 484.8,307 136.5,89.3 279.3,179.2 383.7,306.8 44.3,54.3 76.4,111.4 98.9,170 2.9,-139.7 7.9,-279.3 14.8,-418.7 z m 141.3,-308.6 c -6.8,91 -12.2,182.3 -16.8,273.5 50.1,98.1 82.7,205.3 90.1,322.1 9.4,150.2 -27.9,300.7 -116.6,423.1 -19.1,26.4 -52.5,33.5 -78.8,24 -17.8,142 -74,283.7 -149.5,412.7 -88.4,151 -199.1,286.5 -308.1,422.8 -122.5,153.1 -244.9,306.5 -366.2,460.7 -483.8,615.3 -951.5,1246.8 -1341.2,1927 -403.3,703.8 -701,1458.7 -963.1,2224.6 -63.8,186.4 -125.7,373.5 -186.8,560.9 -43.5,133.2 -89.7,268.2 -168.8,385.2 -66.9,98.8 -158.4,189.8 -278.7,216.8 -137.7,31 -278.3,-22.4 -383.4,-111.1 -129.2,-109 -244.6,-230.2 -380.8,-331.7 -129.3,-96.3 -265.3,-183.3 -405.9,-262 -286.6,-160.6 -590.8,-286.3 -900.6,-394.5 -620.2,-216.7 -1261.6,-365.8 -1883.1,-578.7 -537.7,-184.2 -1186.78,-460.7 -1402.13,-1036.8 -32.85,-87.8 -49.69,-180.2 -51.95,-273.3 -670.74,480.4 -1505.51,719.7 -2330.24,654.2 -954.68,-75.8 -1782.89,-600 -2706.44,-800.4 -507.07,-110 -1054.89,-121.7 -1529.65,113.8 -56.95,28.2 -108.28,-33.7 -91.09,-78.3 -25.36,0.2 -49.81,-13.5 -57.82,-43.6 -62.93,-236 -53.32,-480.2 -36.83,-721.4 16.36,-239.2 45.54,-488.9 -10,-725 -28.52,-121.3 -81.41,-233.5 -162.58,-328.5 -72.03,-84.3 -156.25,-157.3 -222.07,-247 -66.6,-90.8 -103.17,-196.1 -89.77,-309.3 15.86,-134 91.49,-253.1 156.96,-367.9 304.02,-532.9 626.99,-1055 968.08,-1565 324.92,-485.8 686.56,-959.9 898.71,-1509.6 109.14,-282.7 184.61,-577 288.36,-861.6 98.09,-268.9 221.92,-528 360.51,-778.3 141.09,-255 296.88,-501.4 455.66,-745.6 152.97,-235.5 304.22,-472.9 471.45,-698.6 314.96,-425 709.57,-813.1 1234.18,-954.9 242.62,-65.6 502.26,-71.4 743.05,5.4 242.54,77.3 452.14,224.5 651.21,379.1 209.72,163 415.08,328.5 640.11,470.4 219.77,138.7 450.36,260.2 688.79,363.6 486.8,211 1009.4,346.2 1537.4,398.5 258.5,25.6 519.2,31.9 778.7,18 254,-13.6 499.8,-61.5 751.2,-94.1 102.9,-13.3 219,-16.7 320.9,12.2 519.4,-146.7 1032.8,-6.1 1503.6,228.7 250.3,124.9 489.1,271.5 728.9,415 248.3,148.6 503,283.2 755.7,423.7 541.1,300.8 1063.3,638.7 1629.2,892.9 140.1,62.9 283.1,120.1 428.9,168.7 119.3,39.7 230.2,78.2 330.2,157.2 60.5,48.1 112.2,105.4 155.2,168.6 11.4,4.4 21.8,13.2 29.2,27.6 10.1,19.6 17.7,39.6 23.1,59.7 51.3,101.3 81,213.5 84.8,328.3 5,147.7 -28.9,299.9 -45,446.6 -15.8,143.6 -29.4,287.5 -40.2,431.6" style={{fill:'#231f20', fillOpacity:'1', fillRule: 'nonzero', stroke: 'none'}} id="path14"/>
            </g>
          </svg>
        </div>
        <div className="drawing-description">
          Could not find the requested page.
        </div>
        <div className="blob">
          <svg xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"></path>
          </svg>
        </div>
      </div>
    )
  }
}

export default NotFound;








