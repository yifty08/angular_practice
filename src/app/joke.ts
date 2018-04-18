export class Joke {

	setup: string;
	punchline: string;
	hide: boolean;
	msgText: string;

	constructor(setup, punchline) {
		this.setup = setup;
		this.punchline = punchline;
		this.hide = true;
		this.msgText = "Tell Me";
	}

	toggle() {
		this.hide = !this.hide;
		if (this.hide) {
			this.msgText = "Tell Me";
		} else {
			this.msgText = "Hide Me";
		}

		// this.msgText = this.hide ? "Tell Me" : "Hide Me";
	}
}
