import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal-card";

export function TextRevealCardPreview() {
  return (
    (<div
      className="flex items-center justify-center bg-[#0E0E10] h-[40rem] w-full">
      <TextRevealCard text="You know the business" revealText="Ritesh Patel ">
        <TextRevealCardTitle>
          Ye Ritesh Kaun Hai ?
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Sir ye aadmi ke baare mein jyada malum-mat nahi hai.
          Bas itna pata hai ki kuch mahine pehle isne Post-Office ke gang ko join kiya tha.
          Kafi teezi se upar aaya hai. Almost a meteoric rise.
          Undar ki baat toh ye hai ki Post-Office gang ko aaj kal ye aadmi chalata hai.
          Informors ka ye bhi kehna hai ki Post-Office Cricket team ko chalane mein iska bahat bada hath hai.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>)
  );
}
