import { tap } from 'rxjs/operators'

import { dispatch } from '../../dispatcher'
import { clearNumbers } from '../../state/numbers'
import { createUseCase } from '../../utils/architecture/create-use-case'


interface SideEffects {
  clearNumbers: typeof clearNumbers
}

const name = 'use-case.numbers.clear'
export const { useCase: clearNumbersUseCase, intent: clearNumbersIntent } = createUseCase<SideEffects>(name,
  (intents, se) =>
    intents
      .pipe(
        tap(() => se.clearNumbers(name))
      ),
  dispatch,
  { intent: true }
)