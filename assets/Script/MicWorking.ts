import { _decorator, Component, Node, native } from "cc";
const { ccclass, property } = _decorator;

@ccclass("MicWorking")
export class MicWorking extends Component {
    start() {}
    onCLick() {
        console.log(native.reflection.callStaticMethod("com/cocos/lib/websocket/CocosHelper", "printLine", "()V", 0));
        console.log("recording Start");
    }
    update(deltaTime: number) {}
}
