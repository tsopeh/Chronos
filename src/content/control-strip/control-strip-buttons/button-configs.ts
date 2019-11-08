import { ControlStripButtonConfig } from "./control-strip-button";
import { ChronosActions } from "../../actions/actions";

export const controlStripButtonConfigs: ControlStripButtonConfig[] = [
    {
        action: ChronosActions.increasePlaybackRate,
        shortcut: "",
        text: ">>"
    },
    {
        action: ChronosActions.decreasePlaybackRate,
        shortcut: "",
        text: "<<"
    },
    {
        action: ChronosActions.resetPlaybackRate,
        shortcut: "",
        text: "R"
    },
    {
        action: ChronosActions.toggleNavigation,
        shortcut: "",
        text: "T"
    },
    {
        action: ChronosActions.togglePlayPause,
        shortcut: "",
        text: "#"
    }
];
