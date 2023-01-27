import { _decorator, Component, Node, native } from "cc";
const { ccclass, property } = _decorator;

@ccclass("StopRecording")
export class StopRecording extends Component {
    start() {}
    onClick() {
        console.log("stop Recording ");
    }
    update(deltaTime: number) {}
}
