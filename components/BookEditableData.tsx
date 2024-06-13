"use client";
import {
  actionUpdateReview,
  actionUpdateStatus,
} from "@/app/actions/books";
import { Book } from "@/lib/books";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

type bookCardProps = {
  book: Book;
};

export default function BookEditableData({ book }: bookCardProps) {
  const [review, setReview] = useState(book.review);
  const [status, setStatus] = useState(book.status);

  //Si el libro está leído y no tiene reseña, podemos editar el textarea directamente.
  const [editionMode, setEditionMode] = useState(book.review == "");

  const handleTextareaChange = (event: any) => {
    setReview(event.target.value);
  };

  const handleSaveReview = () => {
    actionUpdateReview(book.bookId, review);
    setEditionMode(false);
  };

  const toggleEdition = () => {
    setEditionMode(!editionMode);
  };
  const handleStatusChange = (event: any) => {
    setStatus(event.target.value);
  };

  const handleStatusEdit = () => {
    actionUpdateStatus(book.bookId, status);
  };

  const cancelEdition = () => {
    setEditionMode(false);
    setStatus(book.status);
    setReview(book.review);
  };

  return (
    <main className="flex flex-col">
      <h3 className="min-h-36">
        <span className="underline">Estado de lectura:</span>
        <div>
          <div className="flex flex-row mt-3">
            <div className="pt-3 mx-2">
              {status == "READ" && (
                <Image
                  src="/icons/read.svg"
                  width={10}
                  height={10}
                  alt="Read Icon"
                  className="w-6 h-6"
                />
              )}
              {status == "PENDING" && (
                <Image
                  src="/icons/pending.svg"
                  width={10}
                  height={10}
                  alt="Read Icon"
                  className="w-6 h-6"
                />
              )}
              {status == "READING" && (
                <Image
                  src="/icons/reading.svg"
                  width={10}
                  height={10}
                  alt="Read Icon"
                  className="w-6 h-6"
                />
              )}
            </div>
            <select
              className="item w-32 min-h-10 mr-4"
              name="statuses"
              value={status}
              onChange={handleStatusChange}
            >
              <option value="PENDING">Pendiente</option>
              <option value="READING">Leyendo</option>
              <option value="READ">Leído</option>
            </select>
          </div>
          <div className="">
            {book.status !== status && (
              <div className="flex flex-row gap-2 mt-4 pl-12">
                <Button
                  className="bg-green-400 hover:bg-green-600"
                  onClick={handleStatusEdit}
                >
                  <span>&#10003;</span>
                </Button>
                <Button
                  className="bg-red-300 hover:bg-red-600"
                  onClick={cancelEdition}
                >
                  <Image
                    src="/icons/cancel.svg"
                    width={5}
                    height={5}
                    alt="Edition Icon"
                    className="w-6 "
                  />
                </Button>
              </div>
            )}
          </div>
        </div>
      </h3>

      <div className="min-h-48">
        <h3 className="underline">Reseña: </h3>
        {book.status === "PENDING" && (
          <div>
            <p>!No puedes valorar un libro que no has terminado!</p>
          </div>
        )}
        {book.status === "READING" && (
          <div>
            <p>!No puedes valorar un libro que no has leído!</p>
          </div>
        )}

        {book.status === "READ" && (
          <div className=" flex flex-row gap-2">
            {!editionMode ? (
              <div className=" flex flex-col gap-2">
                <Textarea
                  readOnly
                  placeholder="Escribe aquí tu reseña"
                  className="w-64 min-h-24"
                  value={review}
                  onChange={handleTextareaChange}
                />
                <Button
                  onClick={toggleEdition}
                  className="flex items-center justify-center p-2 bg-blue-400 hover:bg-blue-600 w-10 "
                >
                  <Image
                    src="/icons/pencil.svg"
                    width={5}
                    height={5}
                    alt="Edition Icon"
                    className="w-6 h-6 "
                  />
                </Button>
              </div>
            ) : (
              <div className=" flex flex-col gap-2">
                <Textarea
                  placeholder="Escribe aquí tu reseña"
                  className="w-64 min-h-24"
                  value={review}
                  onChange={handleTextareaChange}
                />

                <div className="flex flex-row gap-2">
                  <div>
                    {book.review === review && (
                      <Button className="cursor-not-allowed bg-gray-400 hover:bg-gray-400 w-10">
                        <span>&#10003;</span>
                      </Button>
                    )}

                    {book.review !== review && (
                      <Button
                        className="bg-green-400 hover:bg-green-600 w-10"
                        onClick={handleSaveReview}
                      >
                        <span>&#10003;</span>
                      </Button>
                    )}
                  </div>
                  {book.review != "" && (
                    <Button
                      onClick={cancelEdition}
                      className="flex items-center justify-center p-2 bg-red-300 hover:bg-red-600 w-10"
                    >
                      <Image
                        src="/icons/cancel.svg"
                        width={5}
                        height={5}
                        alt="Edition Icon"
                        className="w-6 h-6"
                      />
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
