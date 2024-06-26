import type {
  AnyAction,
  ToPrivateAction,
  ToPublicAction,
} from 'movex-core-util';
import type { MovexResourceObservable } from './MovexResourceObservable';

/**
 * This is the MovexResource running on the Client
 * It could be used extensively in the UI hence the need to "bind" the methods
 * so "this" statys correct
 */
export class MovexBoundResource<
  TState = any,
  TAction extends AnyAction = AnyAction
> {
  // TODO: Add the TResourceType so it the rid can be typed correctly
  public rid = this.observable.rid;

  constructor(private observable: MovexResourceObservable<TState, TAction>) {}

  dispatch = (action: ToPublicAction<TAction>) => {
    this.observable.dispatch(action);
  };

  dispatchPrivate = (
    privateAction: ToPrivateAction<TAction>,
    publicAction: ToPublicAction<TAction>
  ) => {
    this.observable.dispatchPrivate(privateAction, publicAction);
  };

  get state() {
    return this.getState();
  }

  private getState = () => {
    return this.observable.getUncheckedState();
  };

  // TODO: Should this give access to the all the subscribers to the client movex??
  // get subscribers() {
  //   // return
  // }

  // This to be called when not used anymore in order to clean the update subscriptions
  destroy = () => {
    this.observable.destroy();
  };
}
