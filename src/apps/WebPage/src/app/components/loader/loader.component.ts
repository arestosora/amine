import { Component } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class Loader {
  constructor(private loaderService:LoaderService) {}
  showLoader = true
  /**
   * Objeto que rige el comportamiento del loader
   */
  loader = {
    /**
     * Activa el loader y hazlo visible para todo el mundo
     * @returns {undefined}
     */
    enable: ():undefined => {
      this.showLoader = true
      return
    },
    /**
     * Oculta el loader y destrúyelo, hazlo inaccesible
     * @returns {undefined}
     */
    disable: ():undefined => {
      this.showLoader = false
      return
    },
    /**
     * Alterna el estado entre visible e invisible y devuelve si el loader es ahora visible o no
     * @returns {Boolean}
     */
    toggle: ():Boolean => {
      this.loaderService.visible?this.loader.disable():this.loader.enable()
      return this.loaderService.visible
    }
  }
}
