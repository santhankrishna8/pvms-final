import { Routes } from '@angular/router';
import { KComponent } from './k/k.component';
import { GeneralComponent } from './general/general.component';
import { JointComponent } from './joint/joint.component';
import { BrokenbonesComponent } from './brokenbones/brokenbones.component';
import { SnakeBiteComponent } from './snake-bite/snake-bite.component';
import { PComponent } from './p/p.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VComponent } from './v/v.component';
import { RegComponent } from './reg/reg.component';
import { CComponent } from './c/c.component';
import { NationalComponent } from './national/national.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'k',component:KComponent},
    {path:'general',component:GeneralComponent},
    {path:'joint',component:JointComponent},
    {path:'brokenBones',component:BrokenbonesComponent},
    {path:'snakeBite',component:SnakeBiteComponent},
    {path:'p',component:PComponent},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'v',component:VComponent},
    {path:'reg',component:RegComponent},
    {path: 'c', component: CComponent, children: [
        { path: 'main', component: MainComponent },
        { path: 'n', component: NationalComponent }
      ]
    }
];
