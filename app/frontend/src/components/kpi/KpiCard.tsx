import { Card } from '../ui/Card';
export function KpiCard({title,value,hint}:{title:string;value:string;hint:string}){return <Card><h3>{title}</h3><p>{value}</p><small>{hint}</small></Card>;}
