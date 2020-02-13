export interface Resposta{
    request: string[];
    response: string;
}

export interface PaqueteRespostas {
    VALID_MESSAGES: Resposta[];
}