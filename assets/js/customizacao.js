
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("grafico-balls", am4plugins_forceDirected.ForceDirectedTree);
var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

chart.data = [
  {
    name: "Linguagens",
    children: [
      {
        name: "FRONTEND",
        children: [
          {
            name: "CSS",
            children: [
              { name: "SCSS", value: 90 },
              { name: "BOOTSTRAP", value: 87 },
              { name: "TAILWIND.CSS", value: 55 }
            ]
          },
          { name: "HTML", value: 148 },
          {
            name: "JAVASCRIPT", children: [
                { name: "JQUERY", value: 70 },
                { name: "REACT", value: 50 },
                { name: "THREE.JS", value: 30 }
            ]
          },
          { name: "C4", value: 26 }
        ]
      },
      {
        name: "BACKEND",
        children: [
          {
            name: "E1",
            children: [
              { name: "EE1", value: 33 },
              { name: "EE2", value: 40 },
              { name: "EE3", value: 89 }
            ]
          },
          {
            name: "E2",
            value: 48
          }
        ]
      }

    ]
  }
];

networkSeries.dataFields.value = "value";
networkSeries.dataFields.name = "name";
// add id field
networkSeries.dataFields.id = "name";

networkSeries.dataFields.children = "children";
networkSeries.nodes.template.tooltipText = "{name}:{value}";
networkSeries.nodes.template.fillOpacity = 1;
networkSeries.manyBodyStrength = -20;
networkSeries.links.template.strength = 0.8;
networkSeries.minRadius = am4core.percent(2);

networkSeries.nodes.template.label.text = "{name}"
networkSeries.fontSize = 10;


