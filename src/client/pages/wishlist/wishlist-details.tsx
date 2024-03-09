import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

export default function WishlistDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  //change this to: const itemId = location.state.item;
  const itemId = 1;
  const [item, setItem] = useState(null);
  const [modal, setModal] = useState(false);
  const [itemsNeeded, setItemsNeeded] = useState(0);
  const [itemFullfilled, setItemFullfilled] = useState({
    item_id: null,
    parent_name: "",
    parent_email: "",
    quantity_purchased: 0,
    date_purchased: new Date(),
  });

  //Need to add 'decrement items quantity' route as well.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(itemFullfilled)
      fetch("/api/wishlist/", {
        method: "POST",
        body: JSON.stringify(itemFullfilled),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((res) => {
          navigate("/wishlist");
        })
        .catch((e) => console.log("Error submitting fulfillment: ", e));
  } 

  function DonateModal() {
    if (modal) {
      return (
        <div className="pt-8">
          <Card className="w-96 max-w-sm">
            <form className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="name1"
                    value="Your name"
                    className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                  />
                </div>
                <TextInput
                  id="name1"
                  value={itemFullfilled.parent_name}
                  onChange={(e) => {
                    e.preventDefault()
                    setItemFullfilled({
                      ...itemFullfilled,
                      parent_name: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="email1"
                    value="Your email"
                    className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                  />
                </div>
                <TextInput
                  id="email1"
                  value={itemFullfilled.parent_email}
                  onChange={(e) => {
                    e.preventDefault()
                    setItemFullfilled({
                      ...itemFullfilled,
                      parent_email: e.target.value,
                    });
                    setItemFullfilled({
                      ...itemFullfilled,
                      item_id: itemId,
                    });
                  }}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="donate1"
                    value="How many are you donating?"
                    className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                  />
                </div>
                <TextInput
                  id="donate1"
                  value={itemFullfilled.quantity_purchased}
                  onChange={e => {
                    e.preventDefault()
                    setItemFullfilled({
                      ...itemFullfilled,
                      quantity_purchased: Number(e.target.value),
                    })
                  }}
                  required/>
              </div>
              <Button
                type="submit"
                onClick={handleSubmit}
                className="inline-flex w-full justify-center rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none dark:focus:ring-purple-900"              >
                Submit
              </Button>
            </form>
          </Card>
        </div>
      );
    }
  }

  useEffect(() => {
    fetch(`/api/wishlist/${itemId}`)
      .then((res) => res.json())
      .then((res) => {
        setItem(res[0]);
        const newAmt =
          res[0].monthly_quantity_usage * 3 < res[0].current_quantity
            ? 0
            : res[0].monthly_quantity_usage * 3 - res[0].current_quantity;
        setItemsNeeded(newAmt);
      })
      .catch((e) => console.log("error retrieving item: ", e));
  }, []);

  if (item !== null) {
    return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <Sidebar />
        </div>
        <div>
          <h1 className="text-left pl-8 pt-8 text-3xl font-extrabold">
            Wishlist Details
          </h1>
        </div>
        <div className="w-full flex justify-center p-6">
          <section
            id="item-info"
            className=""
          >
            <div className="pt-20">
              <Card className="w-96 max-w-lg">
                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                  Item Needed
                </h5>
                <div className="flex items-baseline text-gray-900 dark:text-white">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {item.item_name}
                  </span>
                </div>
                <ul className="my-7 space-y-5">
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      Quantity Needed
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="pl-8 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      {itemsNeeded}
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      Suggested Item Link
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="pl-8 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      <a href={item.item_link} className="underline">
                        Click Me
                      </a>
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      Teacher Comment
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="pl-8 text-center text-wrap italic antialiased text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      {item.teacher_comment}
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  onClick={() => setModal(!modal)}
                  className="inline-flex w-full justify-center rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none dark:focus:ring-purple-900"
                >
                  Donate now!
                </button>
              </Card>
            </div>
            <DonateModal />
          </section>
        </div>
      </div>
    );
  }
}
