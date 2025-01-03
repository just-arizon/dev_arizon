import React from "react";
import { Link } from "@nextui-org/link";
const contact = () => {
  return (
    <div className="flex justify-center mt-2 mb-10">
      <div className="">
        <h1 className="text-3xl text-center p-3">Contact Me.</h1>

        <div className="px-3 text-[#242424]">
          <p className="text-center">
            I am open to new opportunities and collaborations. Reach out to me{" "}
          </p>
          <span className="flex flex-wrap justify-center">
            <Link
              href={"mailto:calistusarinzechinweuba@gmail.com "}
              className="underline flex items-end font-semibold text-[#242424] text-sm"
            >
              calistusarinzechinweuba@gmail.com
            </Link>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default contact;
