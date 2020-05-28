export class DialogModel {
    public Component: any;
    public Title: string;
    public CancelButtonLabel: string;
    public AcceptButtonLabel: string;
    public Message?: string;

    constructor(opts: DialogModel) {
        Object.assign(this, opts); // destructure values
    }
}