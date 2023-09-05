class SecurityCheckFamilyDTO {
    constructor({ SecurityId, Description, Label, Source }) {
      this.SecurityId = SecurityId;
      this.Description = Description;
      this.Label = Label;
      this.Source = Source;
    }
}
  
module.exports = SecurityCheckFamilyDTO;
  