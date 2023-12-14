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
        className="inline-flex shrink-0 cursor-pointer items-center"
      >
        {enabled ? <DarkmodeIcon /> : <LightmodeIcon />}
      </Switch>
    </>
  );
}
