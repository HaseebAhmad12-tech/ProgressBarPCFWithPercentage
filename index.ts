import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class CRMPCFProject implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private container: HTMLDivElement;

    // Constructor not empty anymore → removed warning
    constructor() {
        this.container = document.createElement("div");
    }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container: HTMLDivElement
    ): void {
        this.container = container;
        this.container.classList.add("progress-container");
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        // Use const instead of let (since never reassigned)
        const rawValue = context.parameters.sampleProperty.raw || "0%";

        // Parse number from text (remove %)
        let numericValue = parseInt(rawValue.replace("%", "").trim(), 10);

        if (isNaN(numericValue)) numericValue = 0;
        if (numericValue < 0) numericValue = 0;
        if (numericValue > 100) numericValue = 100;

        // Clear previous content
        this.container.innerHTML = "";

        // Progress bar wrapper
        const bar = document.createElement("div");
        bar.className = "progress-bar";

        // Fill section
        const fill = document.createElement("div");
        fill.className = "progress-fill";
        fill.style.width = numericValue + "%";

        // Color rules
        if (numericValue < 30) {
            fill.style.backgroundColor = "red";
        } else if (numericValue >= 30 && numericValue <= 50) {
            fill.style.backgroundColor = "orange";
        } else if (numericValue > 50 && numericValue < 100) {
            fill.style.backgroundColor = "dodgerblue";
        } else if (numericValue === 100) {
            fill.style.backgroundColor = "green";
        }

        // Text (always show %)
        const text = document.createElement("div");
        text.className = "progress-text";
        text.innerText = rawValue; // use original text field value

        // Append
        bar.appendChild(fill);
        bar.appendChild(text);
        this.container.appendChild(bar);
    }

    public getOutputs(): IOutputs {
        return {};
    }

    // Add comment to silence ESLint empty-function error
    public destroy(): void {
        // Cleanup not needed for this control
    }
}
