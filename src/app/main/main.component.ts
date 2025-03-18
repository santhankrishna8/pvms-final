import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Advisor {
  name: string;
  }
  interface ECMember1 {
    name: string;
    // location: string;
  }
  interface Member {
    position: string;
    name: string;
  }
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  smembers: Member[] = [
    { position: "గౌరవ అధ్యక్షులు", name: "వైద్య S. చంద్రశేఖర్ రాజు" },
    { position: "అధ్యక్షులు", name: "వైద్య M. వేణుగోపాల రెడ్డి" },
    { position: "ఉపాధ్యక్షులు", name: "వైద్య A. ప్రసాద రావు" },
    { position: "ప్రధాన కార్యదర్శి", name: "వైద్య L. శ్రీనివాసులు" },
    { position: "సహాయ కార్యదర్శి", name: "వైద్య రఘునాథ రెడ్డి" },
    { position: "సహాయ కార్యదర్శి", name: "వైద్య జయగోపాల్" },
    { position: "కోశాధికారి", name: "వైద్య V. బాల కృష్ణ" }
  ];
  
  secMembers: ECMember1[] = [
    { name: "వైద్య D. పద్మావతి" },
    { name: "వైద్య Y. ప్రమీల" },
    { name: "వైద్య C.B. సుధా రాణి" },
    { name: "వైద్య V. శ్రీనివాసులు" },
    { name: "వైద్య S.K. ఖలీమ్ బాషా" },
    { name: "వైద్య G.B. సత్యనారాయాణ" },
    { name: "వైద్య N. సంపూర్ణమ్మ" }
  ];
  
  advisors: Advisor[] = [
    { name: "వైద్య Dr. సురభి ప్రసాద్" },
    { name: "వైద్య K. విజయకుమార్" },
    { name: "వైద్య T. మధుసూధన్" }
  ];
}
