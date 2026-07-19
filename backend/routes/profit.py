from fastapi import APIRouter
from models.schemas import ProfitSimulationRequest
from services.profit_simulator import simulate_profit

router = APIRouter()


@router.post("/profit-simulation")
def profit_simulation(data: ProfitSimulationRequest):

    result = simulate_profit(data.crops)

    return result