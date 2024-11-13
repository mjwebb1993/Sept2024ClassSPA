import html from "html-literal";

export default state => {
  console.log('matsinet-metroLink.js:4-state.metro:', state.stops);

  const htmlList = state.stops.features.map(stop => html`<div class="bus-stop">Stop Number: ${stop.properties.StopID}<br>Stop Name: ${stop.properties.StopName}<br>Line: ${stop.properties.LineName}<br>Direction: ${stop.properties.Dir}</div>`);

  return html`
    <section id="metrolink">
      ${htmlList}
    </section>
  `;
}
