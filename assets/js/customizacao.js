
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("grafico-balls", am4plugins_forceDirected.ForceDirectedTree);
var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

chart.data = [

  {
    name: "Habilidades",
    children: [
      {
        name: "FRONTEND",
        children: [
          {
            name: "CSS", value: 30, children: [
              { name: "Scss/Sass", value: 8,},
              { name: "Bootstrap", value: 8 },
              { name: "Tailwind", value: 5 }
            ]
          },
          { name: "HTML5", value: 30 },
          {
            name: "JAVASCRIPT", value: 30, children: [
                { name: "Jquery", value: 8 },
                { name: "React", value: 5 },
                { name: "Three.Js", value: 2 }
            ]
          }
        ]
      },
      {
        name: "BACKEND",
        children: [
          {
            name: "E1",
            children: [
              { name: "EE1", value: 1 },
              { name: "EE2", value: 1 },
              { name: "EE3", value: 1 }
            ]
          },
          {
            name: "E2",
            value: 1
          }
        ]
      },
      {
        name: "DESIGN",
        children: [
          {
            name: "E1",
            children: [
              { name: "EE1", value: 1 },
              { name: "EE2", value: 1 },
              { name: "EE3", value: 1 }
            ]
          },
          {
            name: "E2",
            value: 1
          }
        ]
      },
      {
        name: "SOFTWARES", value: 30,
        children: [
          {
            name: "E1",
            children: [
              { name: "EE1", value: 1 },
              { name: "EE2", value: 1 },
              { name: "EE3", value: 1 }
            ]
          },
          {
            name: "E2",
            value: 1
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
networkSeries.nodes.template.tooltipText = "{name}";
networkSeries.nodes.template.fillOpacity = 1;
networkSeries.manyBodyStrength = -20;
networkSeries.links.template.strength = 0.8;
networkSeries.minRadius = am4core.percent(2);
networkSeries.nodes.template.label.text = "{name}"
networkSeries.fontSize = 20;


