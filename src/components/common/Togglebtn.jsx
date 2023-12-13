import { useState } from "react";
import { Switch } from "@headlessui/react";
import { DarkmodeIcon, LightmodeIcon } from "./Icon";

export default function Togglebtn() {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75 rotate-[-20deg] items-center"
      >
        {enabled ? <DarkmodeIcon /> : <LightmodeIcon />}
        {/* <span className="sr-only">Use setting</span> */}
        <span
          //   aria-hidden="true"
          className={`${enabled ? "translate-x-0" : "translate-x-0"}`}
        />
      </Switch>
    </>
  );
}
