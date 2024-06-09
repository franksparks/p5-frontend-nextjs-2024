import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Books
  const bookOne = await prisma.book.create({
    data: {
      title: "Tan poca vida",
      authorName: "Hanya ",
      authorLastName: "Yanagihara",
      publishYear: 2015,
      review: "",
      cover: "/tanPocaVida.jpeg",
      status: "READ",
    },
  });
  const bookTwo = await prisma.book.create({
    data: {
      title: "La casa de hojas",
      authorName: "Mark ",
      authorLastName: "Danielewski",
      publishYear: 2013,
      review: "",
      cover: "/laCasaDeHojas.jpeg",
      status: "PENDING",
    },
  });
  const bookThree = await prisma.book.create({
    data: {
      title: "Don Quijote de la Mancha",
      authorName: "Miguel",
      authorLastName: "De Cervantes",
      publishYear: 1605,
      review: "Test",
      cover: "/donQuijoteDeLaMancha.jpeg",
      status: "PENDING",
    },
  });
  const bookFour = await prisma.book.create({
    data: {
      title: "El color de la magia",
      authorName: "Terry",
      authorLastName: "Pratchett",
      publishYear: 1983,
      review: "",
      cover: "/elColorDeLaMagia.jpeg",
      status: "READING",
    },
  });
  const bookFive = await prisma.book.create({
    data: {
      title: "Fundación",
      authorName: "Isaac",
      authorLastName: "Asimov",
      publishYear: 1951,
      review: "",
      cover: "/fundacion.jpeg",
      status: "READING",
    },
  });
  const bookSix = await prisma.book.create({
    data: {
      title: "La trilogía de Nueva York",
      authorName: "Paul",
      authorLastName: "Auster",
      publishYear: 1987,
      review: "",
      cover: "/laTrilogiaDeNuevaYork.jpeg",
      status: "READ",
    },
  });
  const bookSeven = await prisma.book.create({
    data: {
      title: "Ubik",
      authorName: "Philip",
      authorLastName: "K. Dick",
      publishYear: 1969,
      review: "",
      cover: "/ubik.jpeg",
      status: "READ",
    },
  });
  const bookEight = await prisma.book.create({
    data: {
      title: "Lavinia",
      authorName: "Ursula",
      authorLastName: "K. Le Guin",
      publishYear: 2008,
      review: "",
      cover: "/lavinia.jpeg",
      status: "READ",
    },
  });
  const bookNine = await prisma.book.create({
    data: {
      title: "El hobbit",
      authorName: "John Ronald Reuel",
      authorLastName: "Tolkien",
      publishYear: 1937,
      review: "",
      cover: "/hobbit.jpeg",
      status: "READ",
    },
  });
  const bookTen = await prisma.book.create({
    data: {
      title: "La Guerra de las salamandras",
      authorName: "Karel",
      authorLastName: "Capek",
      publishYear: 1936,
      review: "",
      cover: "/laGuerraDeLasSalamandras.jpeg",
      status: "READ",
    },
  });
  const bookEleven = await prisma.book.create({
    data: {
      title: "Error Humano",
      authorName: "Chuck",
      authorLastName: "Palauniuk",
      publishYear: 2005,
      review: "",
      cover: "/errorHumano.jpeg",
      status: "READING",
    },
  });
  const bookTwelve = await prisma.book.create({
    data: {
      title: "Atlantis found",
      authorName: "Clive",
      authorLastName: "Cussler",
      publishYear: 2000,
      review: "",
      cover: "/atlantisFound.jpeg",
      status: "PENDING",
    },
  });

  console.log(
    "Books added:",
    bookOne,
    bookTwo,
    bookThree,
    bookFour,
    bookFive,
    bookSix,
    bookSeven,
    bookEight,
    bookNine,
    bookTen,
    bookEleven,
    bookTwelve
  );
}

main();
