import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Member {
  position: string;
  name: string;
}

interface ECMember {
  name: string;
  location: string;
}
@Component({
  selector: 'app-national',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './national.component.html',
  styleUrl: './national.component.css'
})
export class NationalComponent {

  members: Member[] = [
    { position: "గౌరవ అధ్యక్షులు", name: "వైద్య శ్రీశ్రీ శివస్వామి" },
    { position: "అధ్యక్షులు", name: "వైద్య B.ఆనందయ్య" },
    { position: "ఉపాధ్యక్షులు", name: "వైద్య జమాల్ ఖాన్" },
    { position: "ప్రధాన కార్యదర్శి", name: "వైద్య L.శ్రీనివాసులు" },
    { position: "సహాయ కార్యదర్శి", name: "వైద్య S.రమేష్" },
    { position: "కోశాధికారి", name: "వైద్య సోమశేఖర్" }
  ];
  
   ecMembers: ECMember[] = [
    { name: "వైద్య ప్రదీప్ వడియార్", location: "కేరళ" },
    { name: "వైద్య సునీల్ బాబు", location: "కేరళ" },
    { name: "వైద్య విశ్వనాథ్", location: "కర్ణాటక" },
    { name: "వైద్య మంజునాథ రెడ్డి", location: "కర్ణాటక" },
    { name: "వైద్య అయ్యాదొరై", location: "తమిళనాడు" },
    { name: "వైద్య ఆర్మోగ పాండే", location: "తమిళనాడు" }
  ];
}
