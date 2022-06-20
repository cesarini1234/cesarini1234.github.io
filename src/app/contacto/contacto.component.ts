import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {

  contactForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    mensaje: new FormControl('', [Validators.required])
  })

  public selectedRate: number;
	public selectedVoice: SpeechSynthesisVoice | null;
	public text: string;
	public voices: SpeechSynthesisVoice[];
  constructor() {
		this.voices = [];
		this.selectedVoice = null;
		this.selectedRate = 1;
    this.text="Formulario de Contacto. Nombre completo. Correo electrónico. Comentarios. Bton Verde para enviar. Bton rojo para cancelar";
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

  onSaveForm(): void {
    console.log(this.contactForm.value);
  }

  onResetForm(): void {
    this.contactForm.reset();
  }

}
