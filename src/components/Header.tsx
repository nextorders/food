import React from "react";
import { Burger, Button } from "@mantine/core";
import Link from "next/link";

export const Header = ({
  isNavbarOpened,
  toggle,
}: {
  isNavbarOpened: boolean;
  toggle: () => void;
}) => {
  return (
    <div className="w-full h-full px-4 md:px-4 flex flex-row flex-nowrap justify-between content-center items-center border-b border-zinc-100">
      <div className="mr-2 md:mr-0 flex justify-center items-center justify-items-center h-full hover:scale-110 transition duration-200">
        <Burger
          opened={isNavbarOpened}
          onClick={toggle}
          size="md"
          aria-label="Navigation"
          hiddenFrom="sm"
        />
      </div>
      <Link href="/" className="mr-auto">
        <div className="flex flex-row items-center py-4">
          <div className="text-emerald-500 font-semibold text-xl">
            Сытно и вкусно
          </div>
        </div>
      </Link>
      <Button
        variant="filled"
        size="md"
        leftSection={<span className="font-medium">Корзина</span>}
        radius="md"
        className="px-4 py-2 text-white font-semibold bg-emerald-500 hover:bg-emerald-600"
      >
        1290 ₽
      </Button>
    </div>
  );
};
