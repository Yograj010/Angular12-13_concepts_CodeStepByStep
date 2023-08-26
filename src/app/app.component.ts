// import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';    //deprecated method---111
import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_12-13';
  constructor(
    private viewContainer: ViewContainerRef,
    // private cfr: ComponentFactoryResolver        //deprecated method---111
  ){}
  
  /*-------Working but deprecated-------*/            //deprecated method---111
    // async loadCronJob(){
    //   this.viewContainer.clear();
    //   const { CrojobComponent } = await import('./crojob/crojob.component')
    //   this.viewContainer.createComponent(
    //     this.cfr.resolveComponentFactory(CrojobComponent)
    //   );
    // }

    // async loadTemplate(){
    //   this.viewContainer.clear();
    //   const { TemplateComponent } = await import('./template/template.component')
    //   this.viewContainer.createComponent(
    //     this.cfr.resolveComponentFactory(TemplateComponent)
    //   )
    // }
  /*-----------------------------------*/

async loadCronJob(){
  this.viewContainer.clear();
  const { CrojobComponent } = await import('./crojob/crojob.component')
  this.viewContainer.createComponent(CrojobComponent);
}

async loadTemplate(){
  this.viewContainer.clear();
  const { TemplateComponent } = await import('./template/template.component')
  this.viewContainer.createComponent(TemplateComponent)
}

}
