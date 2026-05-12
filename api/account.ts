import { apiRequest } from "@/lib/api.request"

import {
    CreateAccountPayload,
    CreateAccountResponse,
    GetAccountStatusResponse,
    UpdateAccountPayload,
    UpdateAccountResponse,
} from "@/types/account"

export function getAccountStatus(token: string) {
    return apiRequest<GetAccountStatusResponse>(
        "/user/account/status",
        token
    )
}

export function createAccount(
    payload: CreateAccountPayload,
    token: string
) {
    return apiRequest<CreateAccountResponse>(
        "/user/account/create",
        token,
        {
            method: "POST",
            body: JSON.stringify(payload),
        }
    )
}

export function updateAccount(
    payload: UpdateAccountPayload,
    token: string
) {
    return apiRequest<UpdateAccountResponse>(
        "/user/account/update",
        token,
        {
            method: "PATCH",
            body: JSON.stringify(payload),
        }
    )
}