export const certiAttributesMapping = {
    active: "Active",
    certificateid: "Certificate ID",
    rollnumber: 'Roll Number',
    name: 'Name',
    certimage: 'Certificate Photo',
    eventname: 'Event Name'

  };
  
  export interface Certificate {
    active: string,
    certificateid: string,
    rollnumber: string,
    name: string,
    certimage: string,
    eventname: string
  }
  