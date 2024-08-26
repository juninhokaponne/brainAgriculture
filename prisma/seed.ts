import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const farmers = [
    {
      cpfOrCnpj: "04112610001",
      name: "John Smith",
      farmName: "Green Valley",
      city: "Springfield",
      state: "IL",
      totalArea: 120.5,
      arableArea: 85.0,
      vegetationArea: 30.0,
      crops: [
        {
          name: "Algodão",
        },
      ],
    },
    {
      cpfOrCnpj: "04112610002",
      name: "Alexandra Spencer",
      farmName: "Sunny Acres",
      city: "Lincoln",
      state: "NE",
      totalArea: 150.3,
      arableArea: 90.2,
      vegetationArea: 50.0,
      crops: [
        {
          name: "Soja",
        },
      ],
    },
    {
      cpfOrCnpj: "04112610003",
      name: "Michael Johnson",
      farmName: "Riverbend Farms",
      city: "Madison",
      state: "WI",
      totalArea: 110.8,
      arableArea: 75.4,
      vegetationArea: 25.0,
      crops: [
        {
          name: "Soja",
        },
      ],
    },
    {
      cpfOrCnpj: "04112610004",
      name: "Emily Davis",
      farmName: "Mountain View",
      city: "Denver",
      state: "CO",
      totalArea: 130.2,
      arableArea: 80.0,
      vegetationArea: 40.0,
      crops: [
        {
          name: "Algodão",
        },
      ],
    },
    {
      cpfOrCnpj: "04112610005",
      name: "David Wilson",
      farmName: "Prairie Homestead",
      city: "Topeka",
      state: "KS",
      totalArea: 145.6,
      arableArea: 95.3,
      vegetationArea: 40.0,
      crops: [
        {
          name: "Café",
        },
      ],
    },
    {
      cpfOrCnpj: "04112610006",
      name: "Sarah Martinez",
      farmName: "Rolling Hills",
      city: "Columbus",
      state: "OH",
      totalArea: 125.0,
      arableArea: 85.5,
      vegetationArea: 30.0,
      crops: [
        {
          name: "Café",
        },
      ],
    },
    {
      cpfOrCnpj: "04112610007",
      name: "James Anderson",
      farmName: "Woodland Farms",
      city: "Richmond",
      state: "VA",
      totalArea: 115.2,
      arableArea: 70.7,
      vegetationArea: 30.0,
      crops: [
        {
          name: "Cana de Açucar",
        },
      ],
    },
    {
      cpfOrCnpj: "04112610008",
      name: "Olivia Taylor",
      farmName: "Hillcrest Farm",
      city: "Pittsburgh",
      state: "PA",
      totalArea: 140.3,
      arableArea: 85.2,
      vegetationArea: 45.0,
      crops: [
        {
          name: "Milho",
        },
      ],
    },
    {
      cpfOrCnpj: "04112610009",
      name: "Daniel Thompson",
      farmName: "Oceanview Farms",
      city: "Seattle",
      state: "WA",
      totalArea: 135.7,
      arableArea: 90.0,
      vegetationArea: 40.0,
      crops: [
        {
          name: "Cana de Açucar",
        },
      ],
    },
    {
      cpfOrCnpj: "04112610010",
      name: "Megan White",
      farmName: "Country Meadows",
      city: "Austin",
      state: "TX",
      totalArea: 155.5,
      arableArea: 100.2,
      vegetationArea: 45.0,
      crops: [
        {
          name: "Café",
        },
      ],
    },
    {
      cpfOrCnpj: "04112610011",
      name: "Andrew Harris",
      farmName: "Lakeside Farm",
      city: "Nashville",
      state: "TN",
      totalArea: 120.4,
      arableArea: 80.2,
      vegetationArea: 30.0,
      crops: [
        {
          name: "Algodão",
        },
      ],
    },
    {
      cpfOrCnpj: "04112610012",
      name: "Sophia Lewis",
      farmName: "Valley Ridge",
      city: "Raleigh",
      state: "NC",
      totalArea: 110.7,
      arableArea: 70.3,
      vegetationArea: 30.0,
      crops: [
        {
          name: "Milho",
        },
      ],
    },
    {
      cpfOrCnpj: "04112610013",
      name: "Christopher Walker",
      farmName: "Sunset Meadows",
      city: "Orlando",
      state: "FL",
      totalArea: 125.9,
      arableArea: 85.0,
      vegetationArea: 35.0,
      crops: [
        {
          name: "Cana de Açucar",
        },
      ],
    },
    {
      cpfOrCnpj: "04112610014",
      name: "Isabella Hall",
      farmName: "Grove Farm",
      city: "Charlotte",
      state: "NC",
      totalArea: 140.8,
      arableArea: 90.4,
      vegetationArea: 50.0,
      crops: [
        {
          name: "Café",
        },
      ],
    },
    {
      cpfOrCnpj: "04112610015",
      name: "Ethan Allen",
      farmName: "Meadowbrook",
      city: "Indianapolis",
      state: "IN",
      totalArea: 150.1,
      arableArea: 95.5,
      vegetationArea: 50.0,
      crops: [
        {
          name: "Cana de Açucar",
        },
      ],
    },
    {
      cpfOrCnpj: "04112610016",
      name: "Ava Young",
      farmName: "Spring Meadows",
      city: "St. Louis",
      state: "MO",
      totalArea: 135.2,
      arableArea: 85.6,
      vegetationArea: 45.0,
      crops: [
        {
          name: "Soja",
        },
      ],
    },
    {
      cpfOrCnpj: "04112610017",
      name: "Benjamin King",
      farmName: "Sunnybrook Farm",
      city: "Cincinnati",
      state: "OH",
      totalArea: 120.6,
      arableArea: 80.0,
      vegetationArea: 30.0,
      crops: [
        {
          name: "Soja",
        },
      ],
    },
    {
      cpfOrCnpj: "04112610018",
      name: "Charlotte Scott",
      farmName: "River Valley",
      city: "Kansas City",
      state: "ES",
      totalArea: 125.8,
      arableArea: 85.3,
      vegetationArea: 30.0,
      crops: [
        {
          name: "Algodão",
        },
      ],
    },
    {
      cpfOrCnpj: "04112610019",
      name: "Matthew Wright",
      farmName: "Horizon Farms",
      city: "Omaha",
      state: "MG",
      totalArea: 130.5,
      arableArea: 90.7,
      vegetationArea: 35.0,
      crops: [
        {
          name: "Milho",
        },
      ],
    },
    {
      cpfOrCnpj: "64201749029",
      name: "Ella Spencer",
      farmName: "Greenfield",
      city: "Des Moines",
      state: "ES",
      totalArea: 140.9,
      arableArea: 95.5,
      vegetationArea: 45.0,
    },
    {
      cpfOrCnpj: "64201849010",
      name: "Ella Baker III",
      farmName: "Greenfield",
      city: "Des Moines",
      state: "MG",
      totalArea: 140.9,
      arableArea: 95.5,
      vegetationArea: 45.0,
    },
    {
      cpfOrCnpj: "87101384048",
      name: "Neymar JR",
      farmName: "Greenfield",
      city: "Des Moines",
      state: "RJ",
      totalArea: 999.9,
      arableArea: 500.5,
      vegetationArea: 100.0,
    },
    {
      cpfOrCnpj: "20671091034",
      name: "Endrick Oliveira",
      farmName: "Greenfield",
      city: "Des Moines",
      state: "RS",
      totalArea: 140.9,
      arableArea: 95.5,
      vegetationArea: 45.0,
    },
    {
      cpfOrCnpj: "04112610000",
      name: "Felipe Massa",
      farmName: "Greenfield",
      city: "São Paulo",
      state: "SP",
      totalArea: 140.9,
      arableArea: 95.5,
      vegetationArea: 45.0,
    },
    {
      cpfOrCnpj: "11098649060",
      name: "Ella Baker",
      farmName: "Greenfield",
      city: "Des Moines",
      state: "MG",
      totalArea: 140.9,
      arableArea: 95.5,
      vegetationArea: 45.0,
    },
    {
      cpfOrCnpj: "57988441027",
      name: "Ella Baker",
      farmName: "Greenfield",
      city: "Des Moines",
      state: "SP",
      totalArea: 140.9,
      arableArea: 95.5,
      vegetationArea: 45.0,
    },
  ];

  for (const farmer of farmers) {
    await prisma.farmer.create({
      data: {
        cpfOrCnpj: farmer.cpfOrCnpj,
        name: farmer.name,
        farmName: farmer.farmName,
        city: farmer.city,
        state: farmer.state,
        totalArea: farmer.totalArea,
        arableArea: farmer.arableArea,
        vegetationArea: farmer.vegetationArea,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        crops: {
          create: farmer.crops,
        },
      },
    });
  }
}

seed().then(() => {
  console.log("Seed complete");
  prisma.$disconnect();
});
