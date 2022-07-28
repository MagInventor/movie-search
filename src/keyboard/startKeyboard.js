import './startKeyboard.css';
import device from './app/components/Device.component';
import eventsKeyboard from './app/utils/EventsKeyboard.util';

export default function startKeyboard() {
  device.render();

  const KEYBOARD = document.querySelector('.keyboard');
  eventsKeyboard.setKeyboardData();

  KEYBOARD.addEventListener('mousedown', (e) => eventsKeyboard.mouseDown(e));
  KEYBOARD.addEventListener('mouseup', (e) => eventsKeyboard.mouseUp(e));

  window.addEventListener('keydown', (e) => eventsKeyboard.keyDown(e));
  window.addEventListener('keyup', (e) => eventsKeyboard.keyUp(e));
}
