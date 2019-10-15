import echarts from 'echarts';
import chinaMapData from '@public/geo-json/100000_full.json'; // 这份地图与后台使用的一致

echarts.registerMap('100000', chinaMapData);

// 用不到这个了
// import chinaMapData from '@public/geo-json/china_full'
// echarts.registerMap('china', chinaMapData)
