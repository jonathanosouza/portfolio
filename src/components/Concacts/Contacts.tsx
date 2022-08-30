import {CellSignalFull, CellSignalLow, PhoneCall, TelevisionSimple } from "phosphor-react";
import { ContactsContainer } from "./ContactStyle";




export function Concacts() {
  return(
    <ContactsContainer>
      <strong> <PhoneCall size={40} color = "#00B37E"/>Contacts<span>_</span></strong>
    </ContactsContainer>
  )
}