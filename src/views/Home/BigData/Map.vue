<template>
    <Chart :option="option"/>
</template>

<script>
    import Chart from '@components/Chart'

    export default {
        name: 'Map',
        components: {
            Chart,
        },
        data() {
            this.option = {
                grid: {
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                },
                geo: {
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,

                    show: true,
                    map: 'china',
                    itemStyle: {
                        areaColor: 'transparent',
                    },
                },
                series: [
                    {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,

                        name: 'map',
                        type: 'map',
                        mapType: 'china',
                        label: {
                            show: true,
                            color: '#fff',
                            emphasis: {
                                color: '#fff',
                            },
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: Chart.getSize(2),
                                borderColor: 'rgba(0,0,252,0.2)',
                                areaColor: 'rgba(24,194,227,0.65)',
                            },
                            emphasis: {
                                areaColor: 'rgba(24,194,227,0.85)',
                            },
                        },
                        data: [],
                    },
                    {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        symbolSize: 30,
                        data: [
                            [101.963815, 30.050663, '甘孜藏族自治州'],
                        ],
                        symbol: 'image://data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAjCAMAAAAkGTMsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACTFBMVEX71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71ET71EQAAAAoIGoaAAAAw3RSTlMABCEnDgwjHCodEysQFCQPARYSERoeBQYlJigpIA0iBxgZCiwLFVJkTR8JCGBONFA4Fz1iQ11eOzNRMV8bA1xUN32egC5bV0lLkoR7lWhhQkdBmXCbeI+IPFlYVloyeZpruL7AnHOYbzBGZS8ti4q/srWstHaNTFNIOZbT6N+7pcKUbFUCT0qTxq3k1a+mx3WJhtjeqrew7qlqhTrI17ax1H5uvdnEs9vKcny5xeDhembMzqE+h66fnTV3kUV0YzY/QGf5qKu0AAAAAWJLR0TDimiOQgAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+MHBBE2LMdmvBoAAAOxSURBVDjLhZTpexNVFMaHzJLJzGSmuTdpZslknQSy2JLSNkuTNpW2VlCbiixpkyJQSiChILWkBRW1UhDQKmoVUCqugGgBqyLW9S/zXvoUW0F8P8yHeX7PPee897yXIP6lNSaSIv5PNMmYWcuaR0McbxEoq0hKj2DqLLxNAgBSdt5R/1+QU1aAALAkwKjcwyFKcwkIEnSIPpJdc3seAnl5H4WO8XsD0MCcYNJsDxqgBTHksYTWrgt7JA5151WZyCrIrzIQV4uysccaGmPraQN3B8NsfAUU5M0SqkLrTRuaeZZvagkxfnwyZVVletkAB+/F/6LBxtYEmUyllWRjW5MQBbi7sJbJYsgjy9gAGHW3dyTVXOfjG5vJrkR3jxjFfwWrougEATUXrqYbuQ1P8GTvk5t6Nj/1dFLt6n2mzxoV8BRhlrBpdgRxfikf69e02LNbWp7b2rpte6/C7igMsDRuzscQikUHgKMzg8UGtTS0s/X5Xbv3DBf3juxL8+X9B3J+CCQmQ9hEPJy7JVWp9h0c7dh06PALR8Z2vdg+Pnq0XK1NOAHkZIpwKjaIqLbJ6v5jG7tHdh85/tLLr5x4daTltdcDk1OkAaBXfoMgXA50mHFyujpxamD49Jtnzp7bc+b4W2/PvLOu2jcIIYCOMDJCINHAdKlQLm/d/O7h8++9/8Hs2IeHPrpw8VLlaN6PLBPxdmRxSSpTSCjFbQdmP/5k7PLc6U8vn7qypas8UEGTATKKXbWLOoB6c41cv/2zY59/8eVXs19fnescL5C5okUCgt1UhymDRNWjfHuJuXb9+jc3vj17/ru5c/MX+7V8LycAXVy68Dq3hQIUrE2Q0wdvjt26evv2jVvfX5ln+YFLyC2B1JduG1kGgXNhsBT4YV/njz/duTO889roWvnnbjUCJB+TXaLqlTjq31xYYGPDQ0Pzd2dm7o7/0swvhqwUkEyO5fVyOZAZ/pPT5cm9v164+Vtbsae2WKqE8k60E+L9lEj3LEsXSiVV1ViW5flAtZwcTEcAtMn3I5eVkWWSr7Aj/XtuMrHwR3/fYj4/1YayCc3MPxvtY5Bl9J9/1aY6kGqhUCqVmkqgtYHuFYtPqwD1722oBFTZ7cjEg5AynBEOUaSxIh7YMo5yRiN+v0HrFCUJEGccxsXsCurelj0oypRZFVolLgmCICEJAvIYcFarNRjkeLgqti45bs+YHWGXCcntdjMiI4oiKa5+emjFbTK5XK6wJeOL2zgo6UbEU7/82v0NB0K+wn1kdkUAAAAASUVORK5CYII=',
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                    },
                ],
            }
            return {}
        },
    }
</script>

<style lang="scss" scoped>

</style>
