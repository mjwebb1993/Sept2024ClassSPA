// https://rdx.stldata.org/search/type/dataset
import metroBusStops from './data/Metro_St._Louis_MetroBus_Stops_By_Line';

export default {
  header: "MetroLink Stops",
  view: "metroLink",
  stops: metroBusStops || []
};
