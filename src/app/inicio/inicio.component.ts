import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public selectedRate: number;
	public selectedVoice: SpeechSynthesisVoice | null;
	public text: string;
	public voices: SpeechSynthesisVoice[];
  constructor() {
		this.voices = [];
		this.selectedVoice = null;
		this.selectedRate = 1;
    this.text="Santa Claus está esperando tú carta. ¡Haz que está navidad sea diferente!. Envia tu carta al polo norte. Haz este día tan especial mejoré con una experiencia totalmente única, una carta personalizada a Santa Claus y de una manera interactiva. Que tu hijo sea quien la escriba y eliga los juguetes que prefiera, para después enviarla directamente al polo norte. Instrucciones: 1. Deja que tu pequeñ@ redacte la carta para Santa Claus. 2. Que tu pequeñ@ eliga los juguetes que desea. 3. ¡Presiona Enviar y carta irá al polo norte!";
	}
  public ngOnInit() : void {
		this.voices = speechSynthesis.getVoices();
		this.selectedVoice = ( this.voices[ 0 ] || null );
		if ( ! this.voices.length ) {

			speechSynthesis.addEventListener(
				"voiceschanged",
				() => {
					this.voices = speechSynthesis.getVoices();
					this.selectedVoice = ( this.voices[ 0 ] || null );
				}
			);

		}

	}

	public speak() : void {
		if ( ! this.selectedVoice || ! this.text ) {
			return;
		}

		this.stop();
		this.synthesizeSpeechFromText( this.selectedVoice, this.selectedRate, this.text );

	}

	public stop() : void {
		if ( speechSynthesis.speaking ) {

			speechSynthesis.cancel();
		}

	}
	private synthesizeSpeechFromText(
		voice: SpeechSynthesisVoice,
		rate: number,
		text: string
		) : void {

		var utterance = new SpeechSynthesisUtterance( text );
		utterance.voice = this.selectedVoice;
		utterance.rate = rate;

		speechSynthesis.speak( utterance );

	}
}
