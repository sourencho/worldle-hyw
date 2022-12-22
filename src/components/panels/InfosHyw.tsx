import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Worldle } from "../Worldle";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";
import { Twemoji } from "@teuteuf/react-emoji-render";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function InfosHyw({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="How to play" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          6 փորձով գուշակէ Մոլորիկը։
        </div>
        <div>Ամէն մէկ կռահում պէտք է իսկական երկիր կամ երկրամաս ըլլայ։</div>
        <div>
          Ամէն մէկ կռահումէ ետք, պատասխանին հեռաւորութիւնը, ուղղութիւնն ու 
          մօտիկութիւնը պիտի ստանաս։
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Օրինակներ</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Չիլէ",
                direction: "NE",
                distance: 13_557_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            <span className="uppercase font-bold">Չիլէ</span> կռահումդ {' '}
            {formatDistance(13557000, settingsData.distanceUnit)}-ով հեռու է պատասխանէն, որ կը գտնուի Հիւսիս-Արեւելեալ 
            ուղղութեամբ, եւ ունիս 32% մօտիկութիւն, որովհետեւ բաւական հեռու է։
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Ֆինլանտա",
                direction: "SE",
                distance: 3_206_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Երկրորդ կռահումդ, <span className="uppercase font-bold">Ֆինլանտա</span>, աւելի մօտ է։ 
            {' '}{formatDistance(3206000, settingsData.distanceUnit)}-ով հեռու, Հառաւ-Արեւելեան ուղղութեամբ, եւ 84%:
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Լիբանան",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Յաջորդ կռահումդ, <span className="uppercase font-bold">Լիբանան</span>, ճիշդ պատասխանն է։ Շնորհաւո՜ր։
            <Twemoji text="🎉" options={{ className: "inline-block" }} />
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        Նոր Մոլորիկ մը պիտի ունենանք ամէն օր։
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Հարցումներ կամ առաջարկներ ունի՞ս։</div>
        <div>
          Այս&nbsp;
          <a
            className="underline"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            հարցաթղթիկը
          </a>
          &nbsp;գործածէ։
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        Molorig is a Western Armenian{" "}
        <a
          className="underline"
          href="https://worldle.teuteuf.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WORLDLE
        </a>
        {' '} adapted by {' '}
            <a
              href="https://twitter.com/sourenig"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
            @sourenig
            </a> {' '}
            and {' '}
            <a
              href="https://twitter.com/ThePoliticsWand"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
            @ThePoliticsWand
            </a>
            {' '} using open source {' '}
            <a
              href="https://github.com/teuteuf/worldle"
              className="underline"
            >
              code
            </a>{' '}
      </div>
    </Panel>
  );
}
