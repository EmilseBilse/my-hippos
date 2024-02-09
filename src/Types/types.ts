interface Hippo {
    _id?: string;
    name: string;
    weightKg: number;
    color: string;
    habitat: string;
    maxSpeedKmHr: number;
    birthDate: string | Date;
    createdBy?: string;
    lastUpdatedBy?: string;
}