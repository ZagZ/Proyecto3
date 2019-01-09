import React, { Component } from 'react';
import Codigo from './Codigo';
import {Link} from 'react-router-dom'

class Profile extends Component {
    render() {
        return (
            <div className='profile-view'>
                <div className='profileHeader'>
                    <header>
                        <h1>Mike Pilly</h1>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAABVlBMVEVXtt30sXS9AAAxMTEiIiLroWeZAAD////2tHbNAADtpGnwqm7EAADAAABRuuNZu+OwAAC4Qxq2AACfAADrn2H8tnaUAADjklrclHDzrGopLS/pnGKqAAAOAAAWHSDfjVjFXTHSdEPjuq66YzrXfEkaDgN0W0XKZTcGFh2/USeMLjhdp8v97+OHPksAAADFbD8AAAtfWFL4zaoWJStPRTsvZHpAOjQ6e5UgGxnUlGHMVxdymbBpor6lXVDIWiWZbGuEgo7VazC5hVeicUpcTT05LiecdVKBT2ExAAAoSlq6QQi1eEvZoGxINiW0Ui7IlGSTcnb2vYru1dCNe4PTgFndpZTSjHSeY1ysWkV6Y3iWExdvfplFka+rOCOjJBaOJCyQWzgsHBM1GA2WTSpZHgmCWz4cMz2Bjp9BEQC1rqf7487NwrwnAAB3dXRFR0eOj5DqsIuDOBvR9QfoAAAID0lEQVRYhbWZ/VvaWBbHSUjCTUICkkK2CSZEo4D4gg1ardRWfFupxWmn0xlr7Ti7Y7udTtnZ//+XPecGNAQIic8zp49Fcm8++fI9557cYCoVFbnUlsWlJ4XBeVuNXOTJkeDG2dLORDCNnfmzB8JB8XwE2IdvpR4Az31c35nsRSC4pfWPidm5rXluJhkc5+afJmTnzpa4GOg0TJrfSsSOS/bZSXRTN2Kjufn4fueeBsiGYUx02QiyG3HRjXVugDY8r9VqbXtGCOttt1owZgzQO59jys6d7eB8AxDLHblISPHiyPCMYXjp1sk5HCXMxcm2h0XCcUvx7M59nPdFe8tAYGgUzy9Olv04uTgvFv2jpMh0timas+KJ/kxFc97FEOxjhhE4CNdkjmrxZTd80dxukYkRRD6ycPZ6DHRui4q2duOAMfiWFbcAPSTXOlJctLyLluyczUbTJFpHkhwbLd0i24vhBy7x2i4fG83wu/GWDS1qa1niY5MZSVq2YtUI5qR2KMW2GhzhO+DIzuwGSK1O4gegd604eaRVfSwlQ0to9udZVn+ELFqvE6EZXkrHWOu5p4i+TZJFRLewRP4e9Pbfhz6OjX6dFM3FRWOFJEJj8XHrs9BYIRzHJ0JLnVhNhHYnaCGJ0Ie1GHXtr8ZaJxn6NtZqpOiEhsTtIXgnaD0gjUsz0dhUh3VNBjEJFxyjxTe7qeKtAHoq7SGm68A/25RDeHgrmzYdNH10K9atAEoEboyAJpW5YVQc/d59ntedwBBBNNwLrFlPCGqqbfloUp0bie6gF8rd0eNVAmgoEa/RjiZ/6Xb/4xvi1G3bdR2MaqU+N1d3qSnEBcX1SpUOuK7t1h1AH9as37vdF2oEutHlizc1vH/BWU7VxUCCroPnPtqEdzY9SMccuL4E6Nq/GebZl+ls9eUBIbtNqBAdYc6Bs7G4uLixUek6um76qZRhpFvZoAMwwXV025QOreY7QuznEeifbclxm9ieJP39wtvV733OMPr9zALoNgdpBPRCZnvbMrj+98zbhfe6iWlsVh1b7kZY3ZMcYv5p1XalR08yEN+/fjfS/c1MBtDDW5qpu5lM/9tm2uj/F+f8BTq2rT9d4vLPpmdSnTNtUvzf7e0u1Bqyv/X76X7/G5x/Jxpk/4UD6XQ/DQOZJ4SHNB7/XiS8vh+FllxCqrrE87z8mHmymvm6ubn5NbO6+sfj+xXz+I9Vf+BbZvUJ8xgKnZfMOiGmGaX6F1BNIOWIBgYE7qjxNbgaR4/LMJnXq4TokV7/4GJ5VQfoeIFoqFXCyOZcRIXsPYMKkyuInrwzm3CUoqs6YcjBDxFrRv0Z1i1T56eiJ3wYqqMiMUSfi+5QPRvziOzJaHPsEKL5ukyk7l7UQk+p7a40yONktM6H2zeSzQoh+z9GkoH9wiH69DzCMg87NciiORcNhmh3Zbk+vUR03Q5dDNGOTfYjelNAdt2clEcyQNtkDF2Xzd5M0RBd3rHDaHz3BpGyqTtjqmEtRjXUe9l73W44j8SVZZl58wbJenUEDTMle64bVdIBdvvH/TBad92q+0iWoIuH0NTqF9F1F4T3zFAeiYt3K12Hzu/IY+hnjbhkSKUthcyG1glemLwsj9Y1tTpWCgfovYMwejTu8dTqeEYPoj5itjzY4hD681iS75c7+rEf2+mUf5MMmG1XnX8M46efFhZ6Jgmg+QR+oCP7QUegqa1m7uNt9Y4s4yqf1TxC7J4edITIzrv3qBfjvXtvNa2PJGDcRu2PJpKgx49oBGqEin6ZSDS6jStyvDRG96xYeb8kA0M0sEdJIS6D6/0+UPR+O6Foep+URlekbOM2L3g1IB8ktYOyvxyMWkJM29aDixG2TW7k7nQ6+yWwgyJJcBnSLyvc5w8BU3ZVmr7cKflBmin7ecW3O6R3SH7xUDCi3botyUX5oljsFKFAigS/+CyeF4tQHNVu8uK4j0XdrlRfdc6byyfp1xfw0umccJ3O8fLRoV13D5K0pZDo0zr0aLf+z1q6WUtbTY9rel7TsJpp71+VKmzh1x7GzanqpdCDTbOub6wPvxofvBrrFdzLbwhrqprw7xuqmmpcXZ4KggBlDMLt3zzrDswZ3ut3us4z5JMgrF1etRtx+aC2fbX2a57NaoJQWiR0f2Df3Bx7Xq1meEbtt5tXcCeDu8O7kiBoCpv/sHbZTs2kq2rjak0os6KolDU4UyjxtO7QFvsVjRtbN2FbCO0ExwUtr8DkvLZy1YjAw5Pu5ZpWyGazea1U0vIFPPWa1rNEZFmSJPwP+hM8xsF+tofoAiqAc0SxUF653EtNKZnTDyAXsAJg2WxWUcoou4fs0a0vkeDJZQPJGugQ7/AKeDNpi62eFkS2XKKfMJtlaQg+G5+Agn82kOEZgJIFOkvJilkWFAnlrMiujOvOtcuiyOZxmsIOg1pSujah5wVVO658Tcn5u5kKyC/kwZf81RhbXYHjQSw9IS/4cHgsJ3ea3XqvRMnl0dkoXxQ/jIneK4MNIhsKpaDRMhA+VQZsAgtF0Aa1EZ4OlTUuW11RRFYZQ0PkIUMKW9BKG9CeoDY+aQVWYTWo0PFQ8IOXcuOi4aITprNsGQpGAdq1TcxroQC/5rUgWFGG8rFewrLVUwXR2fGP6Csv59EcAcH+u8DEgqZpg3yiOjH76wi6oYkivepkNNILSMEf+lsgCvn80B1ggOxyO2CJelmgaHY62udODOgJQ0MQLyqnQdmCKFLqFEOiIy/cXYSlsjV/Sf4fvNAXaW4qfOwAAAAASUVORK5CYII=' alt='profilepic' />
                    </header>
                
                    <div>
                        <Codigo/>
                    </div>
                </div>

                <div className='profileInterest'>
                    <h1>México</h1>
                    <p>Iornhack</p>
                    <p>Mole</p>
                    <p>Titanic</p>
                    <p>Eres</p>
                    <button><Link to='/interests'>Modificar Intereses</Link></button>
                </div>
            </div>
        );
    }
}

export default Profile;