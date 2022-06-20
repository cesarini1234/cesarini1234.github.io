import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes } from '@techiediaries/ngx-qrcode';
import { NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  elementType = NgxQrcodeElementTypes.IMG;
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = "ayuda@santa.com";

  public selectedRate: number;
	public selectedVoice: SpeechSynthesisVoice | null;
	public text: string;
	public voices: SpeechSynthesisVoice[];
  constructor() {
		this.voices = [];
		this.selectedVoice = null;
		this.selectedRate = 1;
    this.text="Preguntas Frecuentes. ¿Tienes alguna duda?. ¿Tú pregunta no está aquí? ¡Contáctanos!. 1. ¿Puedo recibir varias cartas a la vez?. Si, de hecho, puedes recibir hasta 4 cartas distintas a la vez. 2. Si quiero más de una carta para mis hijos, ¿serán totalmente iguales?. Por supuesto que no, contamos con hasta 5 modelos de carta para elegir. Además, cada carta es personalizada por la persona que lo solicite. 3. ¿Hasta qué fecha puedo hacer mi pedido?. Tienes hasta el 19 de Diciembre, pero para que lleguen antes de Navidad, lo recomendable sería antes del día 10. Si lo solicitas después de este día, es preferible que lo hagas por envío urgente, ya que Correos recibe miles de envíos y no se asegura que se reciba antes del día de Navidad. Después del día 19 de Diciembre, no aceptamos pedidos.";
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
