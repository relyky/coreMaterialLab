import React, { useEffect, useState } from 'react'
import t from 'typy'

export default function useMyEffect(effect, deps) {
    if (!t(effect).isFunction) throw new Error('Invalid value type!')
    if (!t(deps).isArray) throw new Error('Invalid value type!')

    return useEffect(effect, deps)
}
