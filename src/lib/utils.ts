import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type {Service} from "@/types/ServiceDetail"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getServiceFeatures(service:Service):string[]{
  if('details' in service){
    return service.details ;
  }else{
    return service.categories.flatMap(cat=>cat.details);
  }
}
