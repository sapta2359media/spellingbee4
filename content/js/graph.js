/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 114.0, "minX": 0.0, "maxY": 35472.0, "series": [{"data": [[0.0, 114.0], [0.1, 114.0], [0.2, 114.0], [0.3, 114.0], [0.4, 114.0], [0.5, 114.0], [0.6, 114.0], [0.7, 114.0], [0.8, 114.0], [0.9, 114.0], [1.0, 115.0], [1.1, 115.0], [1.2, 115.0], [1.3, 115.0], [1.4, 115.0], [1.5, 115.0], [1.6, 116.0], [1.7, 116.0], [1.8, 116.0], [1.9, 116.0], [2.0, 116.0], [2.1, 116.0], [2.2, 116.0], [2.3, 116.0], [2.4, 116.0], [2.5, 116.0], [2.6, 116.0], [2.7, 116.0], [2.8, 116.0], [2.9, 117.0], [3.0, 117.0], [3.1, 117.0], [3.2, 117.0], [3.3, 117.0], [3.4, 117.0], [3.5, 117.0], [3.6, 117.0], [3.7, 117.0], [3.8, 117.0], [3.9, 117.0], [4.0, 117.0], [4.1, 118.0], [4.2, 118.0], [4.3, 118.0], [4.4, 118.0], [4.5, 118.0], [4.6, 118.0], [4.7, 118.0], [4.8, 118.0], [4.9, 118.0], [5.0, 118.0], [5.1, 118.0], [5.2, 118.0], [5.3, 118.0], [5.4, 118.0], [5.5, 118.0], [5.6, 118.0], [5.7, 118.0], [5.8, 118.0], [5.9, 118.0], [6.0, 118.0], [6.1, 118.0], [6.2, 118.0], [6.3, 119.0], [6.4, 119.0], [6.5, 119.0], [6.6, 119.0], [6.7, 119.0], [6.8, 119.0], [6.9, 119.0], [7.0, 119.0], [7.1, 119.0], [7.2, 119.0], [7.3, 119.0], [7.4, 119.0], [7.5, 119.0], [7.6, 119.0], [7.7, 119.0], [7.8, 119.0], [7.9, 119.0], [8.0, 119.0], [8.1, 119.0], [8.2, 120.0], [8.3, 120.0], [8.4, 120.0], [8.5, 120.0], [8.6, 120.0], [8.7, 120.0], [8.8, 120.0], [8.9, 120.0], [9.0, 120.0], [9.1, 120.0], [9.2, 120.0], [9.3, 120.0], [9.4, 120.0], [9.5, 120.0], [9.6, 120.0], [9.7, 120.0], [9.8, 120.0], [9.9, 120.0], [10.0, 120.0], [10.1, 120.0], [10.2, 120.0], [10.3, 120.0], [10.4, 120.0], [10.5, 120.0], [10.6, 120.0], [10.7, 120.0], [10.8, 120.0], [10.9, 120.0], [11.0, 121.0], [11.1, 121.0], [11.2, 121.0], [11.3, 121.0], [11.4, 121.0], [11.5, 121.0], [11.6, 121.0], [11.7, 121.0], [11.8, 121.0], [11.9, 121.0], [12.0, 121.0], [12.1, 121.0], [12.2, 121.0], [12.3, 121.0], [12.4, 121.0], [12.5, 121.0], [12.6, 121.0], [12.7, 121.0], [12.8, 121.0], [12.9, 121.0], [13.0, 121.0], [13.1, 121.0], [13.2, 121.0], [13.3, 121.0], [13.4, 121.0], [13.5, 121.0], [13.6, 121.0], [13.7, 121.0], [13.8, 121.0], [13.9, 121.0], [14.0, 121.0], [14.1, 122.0], [14.2, 122.0], [14.3, 122.0], [14.4, 122.0], [14.5, 122.0], [14.6, 122.0], [14.7, 122.0], [14.8, 122.0], [14.9, 122.0], [15.0, 122.0], [15.1, 122.0], [15.2, 122.0], [15.3, 122.0], [15.4, 122.0], [15.5, 122.0], [15.6, 122.0], [15.7, 122.0], [15.8, 122.0], [15.9, 122.0], [16.0, 122.0], [16.1, 122.0], [16.2, 122.0], [16.3, 122.0], [16.4, 122.0], [16.5, 122.0], [16.6, 122.0], [16.7, 122.0], [16.8, 122.0], [16.9, 122.0], [17.0, 122.0], [17.1, 122.0], [17.2, 122.0], [17.3, 122.0], [17.4, 122.0], [17.5, 122.0], [17.6, 122.0], [17.7, 122.0], [17.8, 122.0], [17.9, 122.0], [18.0, 122.0], [18.1, 122.0], [18.2, 122.0], [18.3, 122.0], [18.4, 122.0], [18.5, 123.0], [18.6, 123.0], [18.7, 123.0], [18.8, 123.0], [18.9, 123.0], [19.0, 123.0], [19.1, 123.0], [19.2, 123.0], [19.3, 123.0], [19.4, 123.0], [19.5, 123.0], [19.6, 123.0], [19.7, 123.0], [19.8, 123.0], [19.9, 123.0], [20.0, 123.0], [20.1, 123.0], [20.2, 123.0], [20.3, 123.0], [20.4, 123.0], [20.5, 123.0], [20.6, 123.0], [20.7, 123.0], [20.8, 123.0], [20.9, 123.0], [21.0, 123.0], [21.1, 123.0], [21.2, 123.0], [21.3, 124.0], [21.4, 124.0], [21.5, 124.0], [21.6, 124.0], [21.7, 124.0], [21.8, 124.0], [21.9, 124.0], [22.0, 124.0], [22.1, 124.0], [22.2, 124.0], [22.3, 124.0], [22.4, 124.0], [22.5, 124.0], [22.6, 124.0], [22.7, 124.0], [22.8, 124.0], [22.9, 124.0], [23.0, 124.0], [23.1, 124.0], [23.2, 124.0], [23.3, 124.0], [23.4, 124.0], [23.5, 125.0], [23.6, 125.0], [23.7, 125.0], [23.8, 125.0], [23.9, 125.0], [24.0, 125.0], [24.1, 125.0], [24.2, 125.0], [24.3, 125.0], [24.4, 125.0], [24.5, 125.0], [24.6, 125.0], [24.7, 125.0], [24.8, 125.0], [24.9, 125.0], [25.0, 125.0], [25.1, 125.0], [25.2, 125.0], [25.3, 125.0], [25.4, 125.0], [25.5, 125.0], [25.6, 125.0], [25.7, 125.0], [25.8, 125.0], [25.9, 125.0], [26.0, 126.0], [26.1, 126.0], [26.2, 126.0], [26.3, 126.0], [26.4, 126.0], [26.5, 126.0], [26.6, 126.0], [26.7, 126.0], [26.8, 126.0], [26.9, 126.0], [27.0, 126.0], [27.1, 126.0], [27.2, 126.0], [27.3, 126.0], [27.4, 126.0], [27.5, 126.0], [27.6, 126.0], [27.7, 126.0], [27.8, 126.0], [27.9, 126.0], [28.0, 126.0], [28.1, 126.0], [28.2, 126.0], [28.3, 126.0], [28.4, 126.0], [28.5, 126.0], [28.6, 126.0], [28.7, 126.0], [28.8, 127.0], [28.9, 127.0], [29.0, 127.0], [29.1, 127.0], [29.2, 127.0], [29.3, 127.0], [29.4, 127.0], [29.5, 127.0], [29.6, 127.0], [29.7, 127.0], [29.8, 127.0], [29.9, 127.0], [30.0, 127.0], [30.1, 127.0], [30.2, 127.0], [30.3, 127.0], [30.4, 127.0], [30.5, 127.0], [30.6, 127.0], [30.7, 127.0], [30.8, 127.0], [30.9, 127.0], [31.0, 127.0], [31.1, 127.0], [31.2, 127.0], [31.3, 127.0], [31.4, 127.0], [31.5, 127.0], [31.6, 127.0], [31.7, 127.0], [31.8, 127.0], [31.9, 127.0], [32.0, 127.0], [32.1, 127.0], [32.2, 128.0], [32.3, 128.0], [32.4, 128.0], [32.5, 128.0], [32.6, 128.0], [32.7, 128.0], [32.8, 128.0], [32.9, 128.0], [33.0, 128.0], [33.1, 128.0], [33.2, 128.0], [33.3, 128.0], [33.4, 128.0], [33.5, 128.0], [33.6, 128.0], [33.7, 128.0], [33.8, 128.0], [33.9, 128.0], [34.0, 128.0], [34.1, 128.0], [34.2, 128.0], [34.3, 128.0], [34.4, 128.0], [34.5, 128.0], [34.6, 128.0], [34.7, 128.0], [34.8, 128.0], [34.9, 128.0], [35.0, 128.0], [35.1, 128.0], [35.2, 128.0], [35.3, 128.0], [35.4, 128.0], [35.5, 128.0], [35.6, 128.0], [35.7, 128.0], [35.8, 128.0], [35.9, 128.0], [36.0, 128.0], [36.1, 128.0], [36.2, 128.0], [36.3, 128.0], [36.4, 128.0], [36.5, 128.0], [36.6, 129.0], [36.7, 129.0], [36.8, 129.0], [36.9, 129.0], [37.0, 129.0], [37.1, 129.0], [37.2, 129.0], [37.3, 129.0], [37.4, 129.0], [37.5, 129.0], [37.6, 129.0], [37.7, 129.0], [37.8, 129.0], [37.9, 129.0], [38.0, 129.0], [38.1, 129.0], [38.2, 129.0], [38.3, 129.0], [38.4, 129.0], [38.5, 129.0], [38.6, 129.0], [38.7, 129.0], [38.8, 130.0], [38.9, 130.0], [39.0, 130.0], [39.1, 130.0], [39.2, 130.0], [39.3, 130.0], [39.4, 130.0], [39.5, 130.0], [39.6, 130.0], [39.7, 130.0], [39.8, 130.0], [39.9, 130.0], [40.0, 130.0], [40.1, 130.0], [40.2, 130.0], [40.3, 130.0], [40.4, 130.0], [40.5, 130.0], [40.6, 130.0], [40.7, 130.0], [40.8, 130.0], [40.9, 130.0], [41.0, 130.0], [41.1, 130.0], [41.2, 130.0], [41.3, 130.0], [41.4, 130.0], [41.5, 130.0], [41.6, 130.0], [41.7, 130.0], [41.8, 130.0], [41.9, 130.0], [42.0, 130.0], [42.1, 130.0], [42.2, 130.0], [42.3, 130.0], [42.4, 130.0], [42.5, 131.0], [42.6, 131.0], [42.7, 131.0], [42.8, 131.0], [42.9, 131.0], [43.0, 131.0], [43.1, 131.0], [43.2, 131.0], [43.3, 131.0], [43.4, 131.0], [43.5, 131.0], [43.6, 131.0], [43.7, 131.0], [43.8, 131.0], [43.9, 131.0], [44.0, 131.0], [44.1, 131.0], [44.2, 131.0], [44.3, 131.0], [44.4, 131.0], [44.5, 131.0], [44.6, 131.0], [44.7, 131.0], [44.8, 131.0], [44.9, 131.0], [45.0, 132.0], [45.1, 132.0], [45.2, 132.0], [45.3, 132.0], [45.4, 132.0], [45.5, 132.0], [45.6, 132.0], [45.7, 132.0], [45.8, 132.0], [45.9, 132.0], [46.0, 132.0], [46.1, 132.0], [46.2, 132.0], [46.3, 132.0], [46.4, 132.0], [46.5, 132.0], [46.6, 132.0], [46.7, 132.0], [46.8, 132.0], [46.9, 132.0], [47.0, 132.0], [47.1, 132.0], [47.2, 132.0], [47.3, 132.0], [47.4, 132.0], [47.5, 132.0], [47.6, 132.0], [47.7, 132.0], [47.8, 132.0], [47.9, 132.0], [48.0, 132.0], [48.1, 132.0], [48.2, 132.0], [48.3, 132.0], [48.4, 132.0], [48.5, 132.0], [48.6, 132.0], [48.7, 132.0], [48.8, 132.0], [48.9, 132.0], [49.0, 132.0], [49.1, 132.0], [49.2, 132.0], [49.3, 132.0], [49.4, 132.0], [49.5, 132.0], [49.6, 132.0], [49.7, 132.0], [49.8, 132.0], [49.9, 132.0], [50.0, 133.0], [50.1, 133.0], [50.2, 133.0], [50.3, 133.0], [50.4, 133.0], [50.5, 133.0], [50.6, 133.0], [50.7, 133.0], [50.8, 133.0], [50.9, 133.0], [51.0, 133.0], [51.1, 133.0], [51.2, 133.0], [51.3, 133.0], [51.4, 133.0], [51.5, 133.0], [51.6, 133.0], [51.7, 133.0], [51.8, 133.0], [51.9, 133.0], [52.0, 133.0], [52.1, 133.0], [52.2, 134.0], [52.3, 134.0], [52.4, 134.0], [52.5, 134.0], [52.6, 134.0], [52.7, 134.0], [52.8, 134.0], [52.9, 134.0], [53.0, 134.0], [53.1, 134.0], [53.2, 134.0], [53.3, 134.0], [53.4, 134.0], [53.5, 134.0], [53.6, 134.0], [53.7, 134.0], [53.8, 134.0], [53.9, 134.0], [54.0, 134.0], [54.1, 134.0], [54.2, 134.0], [54.3, 134.0], [54.4, 134.0], [54.5, 134.0], [54.6, 134.0], [54.7, 134.0], [54.8, 134.0], [54.9, 134.0], [55.0, 134.0], [55.1, 134.0], [55.2, 134.0], [55.3, 134.0], [55.4, 135.0], [55.5, 135.0], [55.6, 135.0], [55.7, 135.0], [55.8, 135.0], [55.9, 135.0], [56.0, 135.0], [56.1, 135.0], [56.2, 135.0], [56.3, 135.0], [56.4, 135.0], [56.5, 135.0], [56.6, 135.0], [56.7, 135.0], [56.8, 135.0], [56.9, 135.0], [57.0, 135.0], [57.1, 135.0], [57.2, 136.0], [57.3, 136.0], [57.4, 136.0], [57.5, 137.0], [57.6, 137.0], [57.7, 137.0], [57.8, 137.0], [57.9, 137.0], [58.0, 137.0], [58.1, 137.0], [58.2, 137.0], [58.3, 137.0], [58.4, 137.0], [58.5, 138.0], [58.6, 138.0], [58.7, 138.0], [58.8, 138.0], [58.9, 138.0], [59.0, 138.0], [59.1, 138.0], [59.2, 138.0], [59.3, 138.0], [59.4, 138.0], [59.5, 138.0], [59.6, 138.0], [59.7, 138.0], [59.8, 138.0], [59.9, 138.0], [60.0, 139.0], [60.1, 139.0], [60.2, 139.0], [60.3, 139.0], [60.4, 139.0], [60.5, 139.0], [60.6, 139.0], [60.7, 139.0], [60.8, 139.0], [60.9, 139.0], [61.0, 139.0], [61.1, 139.0], [61.2, 139.0], [61.3, 139.0], [61.4, 139.0], [61.5, 139.0], [61.6, 140.0], [61.7, 140.0], [61.8, 140.0], [61.9, 140.0], [62.0, 140.0], [62.1, 140.0], [62.2, 140.0], [62.3, 140.0], [62.4, 140.0], [62.5, 140.0], [62.6, 140.0], [62.7, 140.0], [62.8, 140.0], [62.9, 140.0], [63.0, 140.0], [63.1, 140.0], [63.2, 140.0], [63.3, 140.0], [63.4, 140.0], [63.5, 140.0], [63.6, 140.0], [63.7, 140.0], [63.8, 140.0], [63.9, 140.0], [64.0, 140.0], [64.1, 141.0], [64.2, 141.0], [64.3, 141.0], [64.4, 141.0], [64.5, 141.0], [64.6, 141.0], [64.7, 141.0], [64.8, 141.0], [64.9, 141.0], [65.0, 141.0], [65.1, 141.0], [65.2, 141.0], [65.3, 141.0], [65.4, 141.0], [65.5, 141.0], [65.6, 141.0], [65.7, 141.0], [65.8, 141.0], [65.9, 141.0], [66.0, 141.0], [66.1, 141.0], [66.2, 141.0], [66.3, 141.0], [66.4, 141.0], [66.5, 141.0], [66.6, 142.0], [66.7, 142.0], [66.8, 142.0], [66.9, 142.0], [67.0, 142.0], [67.1, 142.0], [67.2, 143.0], [67.3, 143.0], [67.4, 143.0], [67.5, 143.0], [67.6, 143.0], [67.7, 143.0], [67.8, 143.0], [67.9, 143.0], [68.0, 143.0], [68.1, 143.0], [68.2, 144.0], [68.3, 144.0], [68.4, 144.0], [68.5, 144.0], [68.6, 144.0], [68.7, 144.0], [68.8, 144.0], [68.9, 144.0], [69.0, 144.0], [69.1, 145.0], [69.2, 145.0], [69.3, 145.0], [69.4, 145.0], [69.5, 145.0], [69.6, 145.0], [69.7, 145.0], [69.8, 145.0], [69.9, 145.0], [70.0, 145.0], [70.1, 145.0], [70.2, 145.0], [70.3, 145.0], [70.4, 145.0], [70.5, 145.0], [70.6, 145.0], [70.7, 145.0], [70.8, 145.0], [70.9, 145.0], [71.0, 146.0], [71.1, 146.0], [71.2, 146.0], [71.3, 146.0], [71.4, 146.0], [71.5, 146.0], [71.6, 147.0], [71.7, 147.0], [71.8, 147.0], [71.9, 147.0], [72.0, 147.0], [72.1, 147.0], [72.2, 148.0], [72.3, 148.0], [72.4, 148.0], [72.5, 148.0], [72.6, 148.0], [72.7, 148.0], [72.8, 148.0], [72.9, 148.0], [73.0, 148.0], [73.1, 148.0], [73.2, 148.0], [73.3, 148.0], [73.4, 148.0], [73.5, 149.0], [73.6, 149.0], [73.7, 149.0], [73.8, 149.0], [73.9, 149.0], [74.0, 149.0], [74.1, 149.0], [74.2, 149.0], [74.3, 149.0], [74.4, 150.0], [74.5, 150.0], [74.6, 150.0], [74.7, 150.0], [74.8, 150.0], [74.9, 150.0], [75.0, 151.0], [75.1, 151.0], [75.2, 151.0], [75.3, 151.0], [75.4, 152.0], [75.5, 152.0], [75.6, 152.0], [75.7, 152.0], [75.8, 152.0], [75.9, 152.0], [76.0, 153.0], [76.1, 153.0], [76.2, 153.0], [76.3, 154.0], [76.4, 154.0], [76.5, 154.0], [76.6, 154.0], [76.7, 154.0], [76.8, 154.0], [76.9, 155.0], [77.0, 155.0], [77.1, 155.0], [77.2, 156.0], [77.3, 156.0], [77.4, 156.0], [77.5, 156.0], [77.6, 156.0], [77.7, 156.0], [77.8, 156.0], [77.9, 156.0], [78.0, 156.0], [78.1, 156.0], [78.2, 156.0], [78.3, 156.0], [78.4, 156.0], [78.5, 156.0], [78.6, 156.0], [78.7, 156.0], [78.8, 157.0], [78.9, 157.0], [79.0, 157.0], [79.1, 157.0], [79.2, 157.0], [79.3, 157.0], [79.4, 159.0], [79.5, 159.0], [79.6, 159.0], [79.7, 160.0], [79.8, 160.0], [79.9, 160.0], [80.0, 161.0], [80.1, 161.0], [80.2, 161.0], [80.3, 161.0], [80.4, 164.0], [80.5, 164.0], [80.6, 164.0], [80.7, 165.0], [80.8, 165.0], [80.9, 165.0], [81.0, 166.0], [81.1, 166.0], [81.2, 166.0], [81.3, 166.0], [81.4, 166.0], [81.5, 166.0], [81.6, 166.0], [81.7, 166.0], [81.8, 166.0], [81.9, 168.0], [82.0, 168.0], [82.1, 168.0], [82.2, 168.0], [82.3, 168.0], [82.4, 168.0], [82.5, 170.0], [82.6, 170.0], [82.7, 170.0], [82.8, 170.0], [82.9, 174.0], [83.0, 174.0], [83.1, 174.0], [83.2, 175.0], [83.3, 175.0], [83.4, 175.0], [83.5, 175.0], [83.6, 175.0], [83.7, 175.0], [83.8, 176.0], [83.9, 176.0], [84.0, 176.0], [84.1, 180.0], [84.2, 180.0], [84.3, 180.0], [84.4, 190.0], [84.5, 190.0], [84.6, 190.0], [84.7, 191.0], [84.8, 191.0], [84.9, 191.0], [85.0, 197.0], [85.1, 197.0], [85.2, 197.0], [85.3, 197.0], [85.4, 197.0], [85.5, 197.0], [85.6, 197.0], [85.7, 198.0], [85.8, 198.0], [85.9, 198.0], [86.0, 203.0], [86.1, 203.0], [86.2, 203.0], [86.3, 206.0], [86.4, 206.0], [86.5, 206.0], [86.6, 207.0], [86.7, 207.0], [86.8, 207.0], [86.9, 226.0], [87.0, 226.0], [87.1, 226.0], [87.2, 228.0], [87.3, 228.0], [87.4, 228.0], [87.5, 235.0], [87.6, 235.0], [87.7, 235.0], [87.8, 235.0], [87.9, 239.0], [88.0, 239.0], [88.1, 239.0], [88.2, 269.0], [88.3, 269.0], [88.4, 269.0], [88.5, 283.0], [88.6, 283.0], [88.7, 283.0], [88.8, 287.0], [88.9, 287.0], [89.0, 287.0], [89.1, 324.0], [89.2, 324.0], [89.3, 324.0], [89.4, 326.0], [89.5, 326.0], [89.6, 326.0], [89.7, 394.0], [89.8, 394.0], [89.9, 394.0], [90.0, 474.0], [90.1, 474.0], [90.2, 474.0], [90.3, 474.0], [90.4, 581.0], [90.5, 581.0], [90.6, 581.0], [90.7, 1132.0], [90.8, 1132.0], [90.9, 1132.0], [91.0, 1173.0], [91.1, 1173.0], [91.2, 1173.0], [91.3, 1480.0], [91.4, 1480.0], [91.5, 1480.0], [91.6, 1968.0], [91.7, 1968.0], [91.8, 1968.0], [91.9, 11220.0], [92.0, 11220.0], [92.1, 11220.0], [92.2, 19292.0], [92.3, 19292.0], [92.4, 19292.0], [92.5, 19294.0], [92.6, 19294.0], [92.7, 19294.0], [92.8, 19294.0], [92.9, 19295.0], [93.0, 19295.0], [93.1, 19295.0], [93.2, 19300.0], [93.3, 19300.0], [93.4, 19300.0], [93.5, 19302.0], [93.6, 19302.0], [93.7, 19302.0], [93.8, 19303.0], [93.9, 19303.0], [94.0, 19303.0], [94.1, 19310.0], [94.2, 19310.0], [94.3, 19310.0], [94.4, 19312.0], [94.5, 19312.0], [94.6, 19312.0], [94.7, 19313.0], [94.8, 19313.0], [94.9, 19313.0], [95.0, 19318.0], [95.1, 19318.0], [95.2, 19318.0], [95.3, 19318.0], [95.4, 19319.0], [95.5, 19319.0], [95.6, 19319.0], [95.7, 19320.0], [95.8, 19320.0], [95.9, 19320.0], [96.0, 19321.0], [96.1, 19321.0], [96.2, 19321.0], [96.3, 19328.0], [96.4, 19328.0], [96.5, 19328.0], [96.6, 19328.0], [96.7, 19328.0], [96.8, 19328.0], [96.9, 19331.0], [97.0, 19331.0], [97.1, 19331.0], [97.2, 19334.0], [97.3, 19334.0], [97.4, 19334.0], [97.5, 19335.0], [97.6, 19335.0], [97.7, 19335.0], [97.8, 19335.0], [97.9, 19340.0], [98.0, 19340.0], [98.1, 19340.0], [98.2, 19344.0], [98.3, 19344.0], [98.4, 19344.0], [98.5, 19357.0], [98.6, 19357.0], [98.7, 19357.0], [98.8, 19366.0], [98.9, 19366.0], [99.0, 19366.0], [99.1, 35423.0], [99.2, 35423.0], [99.3, 35423.0], [99.4, 35452.0], [99.5, 35452.0], [99.6, 35452.0], [99.7, 35472.0], [99.8, 35472.0], [99.9, 35472.0]], "isOverall": false, "label": "2359project", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 275.0, "series": [{"data": [[1100.0, 2.0], [35400.0, 3.0], [300.0, 3.0], [19300.0, 19.0], [19200.0, 3.0], [1400.0, 1.0], [11200.0, 1.0], [100.0, 275.0], [200.0, 10.0], [400.0, 1.0], [1900.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "2359project", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 35400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 289.0, "series": [{"data": [[0.0, 289.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 27.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.1612903225806455, "minX": 1.67651592E12, "maxY": 3.9393939393939412, "series": [{"data": [[1.6765161E12, 1.9999999999999996], [1.67651592E12, 1.1612903225806455], [1.67651598E12, 2.9166666666666665], [1.67651616E12, 3.781250000000001], [1.67651622E12, 1.3428571428571425], [1.67651604E12, 3.9393939393939412]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67651622E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 133.33333333333331, "minX": 1.0, "maxY": 2919.9624999999996, "series": [{"data": [[1.0, 1637.9682539682537], [2.0, 1287.7530864197527], [4.0, 1985.7777777777787], [5.0, 846.5925925925926], [3.0, 2919.9624999999996], [6.0, 133.33333333333331]], "isOverall": false, "label": "2359project", "isController": false}, {"data": [[2.7750000000000026, 1843.3093750000005]], "isOverall": false, "label": "2359project-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 6.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 210.8, "minX": 1.67651592E12, "maxY": 1083.25, "series": [{"data": [[1.6765161E12, 1050.4833333333333], [1.67651592E12, 508.9], [1.67651598E12, 984.75], [1.67651616E12, 1050.4666666666667], [1.67651622E12, 574.5666666666667], [1.67651604E12, 1083.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6765161E12, 435.2], [1.67651592E12, 210.8], [1.67651598E12, 408.0], [1.67651616E12, 435.2], [1.67651622E12, 238.0], [1.67651604E12, 448.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67651622E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 300.51612903225805, "minX": 1.67651592E12, "maxY": 2922.7272727272734, "series": [{"data": [[1.6765161E12, 1293.0000000000005], [1.67651592E12, 300.51612903225805], [1.67651598E12, 1689.5333333333335], [1.67651616E12, 2508.546875], [1.67651622E12, 1227.771428571428], [1.67651604E12, 2922.7272727272734]], "isOverall": false, "label": "2359project", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67651622E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 299.77419354838713, "minX": 1.67651592E12, "maxY": 2922.666666666667, "series": [{"data": [[1.6765161E12, 1292.9843749999995], [1.67651592E12, 299.77419354838713], [1.67651598E12, 1689.4500000000005], [1.67651616E12, 2508.515624999998], [1.67651622E12, 1227.7142857142856], [1.67651604E12, 2922.666666666667]], "isOverall": false, "label": "2359project", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67651622E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 162.19354838709677, "minX": 1.67651592E12, "maxY": 2867.515151515152, "series": [{"data": [[1.6765161E12, 1234.0156250000002], [1.67651592E12, 162.19354838709677], [1.67651598E12, 1632.9333333333332], [1.67651616E12, 2449.5781249999995], [1.67651622E12, 1177.685714285714], [1.67651604E12, 2867.515151515152]], "isOverall": false, "label": "2359project", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67651622E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 114.0, "minX": 1.67651592E12, "maxY": 35472.0, "series": [{"data": [[1.6765161E12, 35452.0], [1.67651592E12, 1968.0], [1.67651598E12, 35423.0], [1.67651616E12, 35472.0], [1.67651622E12, 19357.0], [1.67651604E12, 19366.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6765161E12, 114.0], [1.67651592E12, 121.0], [1.67651598E12, 116.0], [1.67651616E12, 114.0], [1.67651622E12, 115.0], [1.67651604E12, 115.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6765161E12, 175.0], [1.67651592E12, 1021.8000000000004], [1.67651598E12, 235.79999999999995], [1.67651616E12, 19293.0], [1.67651622E12, 149.0], [1.67651604E12, 19310.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6765161E12, 35452.0], [1.67651592E12, 1968.0], [1.67651598E12, 35423.0], [1.67651616E12, 35472.0], [1.67651622E12, 19357.0], [1.67651604E12, 19366.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6765161E12, 131.5], [1.67651592E12, 146.0], [1.67651598E12, 133.0], [1.67651616E12, 130.5], [1.67651622E12, 128.0], [1.67651604E12, 133.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.6765161E12, 14589.75], [1.67651592E12, 1675.1999999999994], [1.67651598E12, 19318.05], [1.67651616E12, 19319.5], [1.67651622E12, 19339.4], [1.67651604E12, 19328.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67651622E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 132.0, "minX": 1.0, "maxY": 581.0, "series": [{"data": [[1.0, 132.0], [2.0, 140.5], [3.0, 581.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 132.0, "minX": 1.0, "maxY": 581.0, "series": [{"data": [[1.0, 132.0], [2.0, 140.0], [3.0, 581.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.67651592E12, "maxY": 1.0666666666666667, "series": [{"data": [[1.6765161E12, 1.0666666666666667], [1.67651592E12, 0.5166666666666667], [1.67651598E12, 1.0666666666666667], [1.67651616E12, 1.0666666666666667], [1.67651622E12, 0.55], [1.67651604E12, 1.0666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67651622E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.67651592E12, "maxY": 1.1, "series": [{"data": [[1.6765161E12, 1.0666666666666667], [1.67651592E12, 0.5166666666666667], [1.67651598E12, 1.0], [1.67651616E12, 1.0666666666666667], [1.67651622E12, 0.5833333333333334], [1.67651604E12, 1.1]], "isOverall": false, "label": "206", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67651622E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.67651592E12, "maxY": 1.1, "series": [{"data": [[1.6765161E12, 1.0666666666666667], [1.67651592E12, 0.5166666666666667], [1.67651598E12, 1.0], [1.67651616E12, 1.0666666666666667], [1.67651622E12, 0.5833333333333334], [1.67651604E12, 1.1]], "isOverall": false, "label": "2359project-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67651622E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.67651592E12, "maxY": 1.1, "series": [{"data": [[1.6765161E12, 1.0666666666666667], [1.67651592E12, 0.5166666666666667], [1.67651598E12, 1.0], [1.67651616E12, 1.0666666666666667], [1.67651622E12, 0.5833333333333334], [1.67651604E12, 1.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67651622E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

