

$(document).ready(function(){
  
  var writing = ["am writing", "write", "message", "am messaging", "write", "am writing", "email", "am emailing"]
  var express = ["voice", "express", "relay"]
  var anger = ["anger", "dissatisfaction", "frustration"]
  var your = ["your", "your and your colleagues'", "your colleagues'", "the College Board's"]
  var decision = ["decision", "choice"]
  var nix = ["remove", "nix", "censor", "delete", "eliminate"]
  var vital = ["key", "important", "vital", "critical", "essential"]
  var elements = ["topics", "elements", "concepts"]
  var offrom = ["of", "from"]
  var bcof = ["because of", "due to"]
  var complaint = ["complaints", "a complaint"]
  var fl = ["Ron DeSantis", "Governor Ron DeSantis", "Florida Governor Ron DeSantis", "FLDOE", "Florida's Department of Education", "the Florida Department of Education", "the DeSantis Administration"]
    
   
      
var sen1 = `I ${rand(writing)} to ${rand(express)} my ${rand(anger)} with ${rand(your)} ${rand(decision)} to ${rand(nix)} ${rand(vital)} ${rand(elements)} ${rand(offrom)} AP African American Studies ${rand(bcof)} ${rand(complaint)} from ${rand(fl)}.`

 

var unwise = ["unwise", "irresponsible", "immoral"]
var takeadvice = ["take advice from", "bow to pressure from", "be advised by", "align yourself with"]
var racist = ["racist", "bigoted", "discriminatory"]
var beliefs = ["practices", "legislation", "beliefs", "tendencies"]
var namely = ["namely", "especially"]
var its = ["It is", "It's"]

var sen2 = `${rand(its)} ${rand(unwise)} to ${rand(takeadvice)} ${rand(fl)}, ${rand(namely)} given their ${rand(racist)} ${rand(beliefs)}.`



var authors = ["Kimberlé W. Crenshaw", "Ta-Nehisi Coates", "bell hooks", "Roderick Ferguson"]
var blm = ["Black Lives Matter", "mass incarceration", "Black Feminism", "Black Queer experiences", "the debate over reparations", "police brutality"]
var suchas = ["such as", "like"]
var influential = ["influential", "impactful", "prominent"]
var thinker = ["thinkers", "leaders", "authors", "figures"]
var cant = ["cannot", "can't", "must not", "musn't", "should not", "shouldn't"]
var censored = ["censored", "on the chopping block", "minimized", "restricted"]
var deserve = ["deserve to", "must", "have to", "need to"]
var holistic = ["holistic", "truthful", "authentic", "relevant", "comprehensive"]
var black = ["Black American", "African American", "Black"]
var accurately = ["accurately", "truthfully"]
var sen3 = `${cap(rand(vital))} contemporary ${rand(elements)}, ${rand(suchas)} ${rand(blm)}, and  ${rand(influential)} ${rand(thinker)}, ${rand(suchas)} ${rand(authors)}, ${rand(cant)} be ${rand(censored)}—students ${rand(deserve)} learn from a ${rand(holistic)} curriculum that ${rand(accurately)} depicts the ${rand(black)} experience.`

// Email Template #2~ Jack

// Hello, 

// I’m urging you to reverse this irrational decision and rightfully return the removed topics. 

// Thank you, 
// An upset student

  var you = ["you", "your and your colleague'", "your colleagues'", "the College Board's"]
  var urge = [`urge`,`insist that`, `implore`]
  var change = ["revise", "change", "alter", "revert"]
  var justly = ["justly", "rightfully", "deservedly"]
var sen4 = `I ${rand(urge)} ${rand(you)} to ${rand(change)} the curriculum to ${rand(justly)} include these ${rand(vital)} ${rand(elements)}.`

var opener = ["Dear College Board", "To whom it may concern", "To the College Board", "Hello", "Hi"]

/// JUST COLLEGE BOARD FORM ///
var fullLetter = `${rand(opener)}, \n\n${sen1} ${sen2} ${sen3} ${sen4}`
console.log(fullLetter)

var linkLetter = encodeURIComponent(fullLetter)

var formz = ["tfa_1895","tfa_1911","tfa_1914","tfa_1908","tfa_1912","tfa_1910"]
  
var link = `https://collegeboard.tfaforms.net/21?&tfa_1893=${rand(formz)}&tfa_1892=${linkLetter}`
var ap = ["Advanced Placement Course", "AP Course", "AP African American Studies", "New AP Offering"]
var subject = [`${cap(rand(vital))} ${cap(rand(elements))} in ${rand(ap)}`]

  $('#cbForm').attr("href", link)
  
  /// BEGINNING OF THE EMAIL DISASTER LOL ///
  /// JUST COLLEGE BOARD EMAIL ///

  
  var collegeBoardEmails = [
    "dcoleman@collegeboard.org", "kkukrer@collegeboard.org", "ngamboa@collegeboard.org", "wmihoulides@collegeboard.org","ssinha@collegeboard.org", "miwilliams@collegeboard.org", "bglismann@collegeboard.org", "nadler@collegeboard.org", "bglismann@collegeboard.org", "ssanford@collegeboard.org", "jzika@collegeboard.org", "kfusco@collegeboard.org", "dcoleman@collegeboard.org", "kkukrer@collegeboard.org", "ngamboa@collegeboard.org", "wmihoulides@collegeboard.org","ssinha@collegeboard.org", "miwilliams@collegeboard.org", "bglismann@collegeboard.org", "nadler@collegeboard.org", "bglismann@collegeboard.org", "ssanford@collegeboard.org", "jzika@collegeboard.org", "kfusco@collegeboard.org"]
  var cbEmails = collegeBoardEmails.join(",")
  var emailLetter = encodeURIComponent(fullLetter)
  var emailLink=`mailto:?bcc=${cbEmails}&subject=${encodeURIComponent(rand(subject))}&body=${emailLetter}`
  $('#email').attr("href", emailLink) 
     

})


function rand(arr) {
    var index = Math.floor(Math.random() * arr.length)
    return arr[index];
}

function cap(string) {
  return string.charAt(0).toUpperCase()  + string.slice(1)
}