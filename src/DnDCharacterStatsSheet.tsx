import React from 'react'

// eslint-disable-next-line no-unused-vars
import DnDCharacter from './DnDCharacter'

import Statbox from './Components/StatBox'
import StatRow from './Components/StatRow'
import Skill from './Components/Skill'
import StatBox2 from './Components/StatBox2'
import DeathSave from './Components/DeathSave'
import AttackTable from './Components/AttackTable'
import Currency from './Components/Currency'

import './dndstyles.css'

interface IDnDCharacterStatsSheetProps {
  character?: DnDCharacter
  defaultCharacter?: DnDCharacter
  onCharacterChanged?: (
    character: DnDCharacter,
    changedField: string,
    newValue: any
  ) => void
}

interface IDnDCharacterStatsSheetState {
  character: DnDCharacter
}

const initialState: IDnDCharacterStatsSheetState = {
  character: {}
}

class DnDCharacterStatsSheet extends React.Component<
  IDnDCharacterStatsSheetProps,
  IDnDCharacterStatsSheetState
> {
  constructor(props: IDnDCharacterStatsSheetProps) {
    super(props)
    if (props.defaultCharacter) {
      initialState.character = props.defaultCharacter
    }
    this.state = initialState
  }

  updateCharacter(name: string, value: any) {
    const oldCharacter = this.getCharacter()
    const newCharacter: DnDCharacter = {}
    Object.assign(newCharacter, oldCharacter)
    newCharacter[name] = value

    if (!this.props.character) {
      // NOT CONTROLLED
      this.setState({ character: newCharacter })
    }

    if (typeof this.props.onCharacterChanged === 'function') {
      this.props.onCharacterChanged(newCharacter, name, value)
    }
  }

  getCharacter() {
    // NOT CONTROLLED
    let character = this.state.character
    if (this.props.character) {
      // CONTROLLED
      character = this.props.character
    }
    return character
  }

  render() {
    const character = this.getCharacter()

    return (
      <div className='d-and-d-character-sheet container-xl mt-5 mb-5'>
        <div>
          <div className='row mb-4'>
            <div className='col-md-3 pr-2 pl-2'>
              <div className='d-and-d-page-title'>D&D</div>
              <div className='d-and-d-attribute-collection char-name pr-3 pl-3'>
                <input
                  type='text'
                  value={character.name ? character.name : ''}
                  onChange={(e) => this.updateCharacter('name', e.target.value)}
                />
              </div>
              <label
                style={{
                  width: '100%',
                  textAlign: 'right',
                  textTransform: 'uppercase',
                  fontSize: '11px'
                }}
              >
                Имя персонажа
              </label>
            </div>
            <div className='col-md-9 pr-2 pl-2'>
              <div className='d-and-d-attribute-collection pr-3 pl-3'>
                <div className='row pl-3 pr-3'>
                  <div className='col-md-3 col-6 pl-0 pr-0'>
                    <input
                      type='text'
                      value={character.classLevel ? character.classLevel : ''}
                      onChange={(e) =>
                        this.updateCharacter('classLevel', e.target.value)
                      }
                    />
                    <label>Класс и уровень</label>
                  </div>
                  <div className='col-md-3 col-6 pl-0 pr-0'>
                    <input
                      type='text'
                      value={character.background ? character.background : ''}
                      onChange={(e) =>
                        this.updateCharacter('background', e.target.value)
                      }
                    />
                    <label>Предыстория</label>
                  </div>
                  <div className='col-md-3 col-6 pl-0 pr-0'>
                    <input
                      type='text'
                      value={character.playerName ? character.playerName : ''}
                      onChange={(e) =>
                        this.updateCharacter('playerName', e.target.value)
                      }
                    />
                    <label>Имя игрока</label>
                  </div>
                  <div className='col-md-3 col-6 pl-0 pr-0'>
                    <input
                      type='text'
                      value={character.faction ? character.faction : ''}
                      onChange={(e) =>
                        this.updateCharacter('faction', e.target.value)
                      }
                    />
                    <label>Фракция</label>
                  </div>
                </div>
                <div className='row pl-3 pr-3'>
                  <div className='col-md-3 col-6 pl-0 pr-0'>
                    <input
                      type='text'
                      value={character.race ? character.race : ''}
                      onChange={(e) =>
                        this.updateCharacter('race', e.target.value)
                      }
                    />
                    <label>Раса</label>
                  </div>
                  <div className='col-md-3 col-6 pl-0 pr-0'>
                    <input
                      type='text'
                      value={character.alignment ? character.alignment : ''}
                      onChange={(e) =>
                        this.updateCharacter('alignment', e.target.value)
                      }
                    />
                    <label>Мировозрение</label>
                  </div>
                  <div className='col-md-3 col-6 pl-0 pr-0'>
                    <input
                      type='text'
                      value={character.xp ? character.xp : ''}
                      onChange={(e) =>
                        this.updateCharacter('xp', e.target.value)
                      }
                    />
                    <label>Очки опыта</label>
                  </div>
                  <div className='col-md-3 col-6 pl-0 pr-0'>
                    <input
                      type='text'
                      value={character.dciNo ? character.dciNo : ''}
                      onChange={(e) =>
                        this.updateCharacter('dciNo', e.target.value)
                      }
                    />
                    <label>DCI Number</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-4'>
              <div className='row'>
                <div className='col-4 pr-1'>
                  <div className='d-and-d-box gray'>
                    <Statbox
                      label='Сила'
                      name='str'
                      value={character.str}
                      onChange={(name: string, value: any) => {
                        this.updateCharacter(name, value)
                      }}
                    />
                    <Statbox
                      label='Ловкость'
                      name='dex'
                      value={character.dex}
                      onChange={(name: string, value: any) => {
                        this.updateCharacter(name, value)
                      }}
                    />
                    <Statbox
                      label='Телосложение'
                      name='con'
                      value={character.con}
                      onChange={(name: string, value: any) => {
                        this.updateCharacter(name, value)
                      }}
                    />
                    <Statbox
                      label='Интеллект'
                      name='int'
                      value={character.int}
                      onChange={(name: string, value: any) => {
                        this.updateCharacter(name, value)
                      }}
                    />
                    <Statbox
                      label='Мудрость'
                      name='wis'
                      value={character.wis}
                      onChange={(name: string, value: any) => {
                        this.updateCharacter(name, value)
                      }}
                    />
                    <Statbox
                      label='Харизма'
                      name='cha'
                      value={character.cha}
                      onChange={(name: string, value: any) => {
                        this.updateCharacter(name, value)
                      }}
                    />
                  </div>
                </div>
                <div className='col-8'>
                  <StatRow
                    label='Вдохновение'
                    name='inspiration'
                    value={character.inspiration}
                    onChange={(name: string, value: any) => {
                      this.updateCharacter(name, value)
                    }}
                  />
                  <StatRow
                    classes='rounded'
                    label='Бонус мастерства'
                    name='proficiencyBonus'
                    value={character.proficiencyBonus}
                    onChange={(name: string, value: any) => {
                      this.updateCharacter(name, value)
                    }}
                  />
                  <div className='d-and-d-box'>
                    <div style={{ textAlign: 'left' }}>
                      <Skill
                        label='Сила'
                        name='strSave'
                        value={character.strSave}
                        checked={character.strSaveChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Ловкость'
                        name='dexSave'
                        value={character.dexSave}
                        checked={character.dexSaveChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Телосложение'
                        name='conSave'
                        value={character.conSave}
                        checked={character.conSaveChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Интеллект'
                        name='intSave'
                        value={character.intSave}
                        checked={character.intSaveChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Мудрость'
                        name='wisSave'
                        value={character.wisSave}
                        checked={character.wisSaveChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Харизма'
                        name='chaSave'
                        value={character.chaSave}
                        checked={character.chaSaveChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                    </div>
                    <label
                      className='d-and-d-title'
                      style={{ marginTop: '10px' }}
                    >
                      Спасброски
                    </label>
                  </div>
                  <div className='d-and-d-box'>
                    <div style={{ textAlign: 'left' }}>
                      <Skill
                        label='Акробатика'
                        hint='(Dex)'
                        name='skillAcrobatics'
                        value={character.skillAcrobatics}
                        checked={character.skillAcrobaticsChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Уход за животными'
                        hint='(Wis)'
                        name='skillAnimalHandling'
                        value={character.skillAnimalHandling}
                        checked={character.skillAnimalHandlingChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Магия'
                        hint='(Int)'
                        name='skillArcana'
                        value={character.skillArcana}
                        checked={character.skillArcanaChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Атлетика'
                        hint='(Str)'
                        name='skillAthletics'
                        value={character.skillAthletics}
                        checked={character.skillAthleticsChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Обман'
                        hint='(Cha)'
                        name='skillDeception'
                        value={character.skillDeception}
                        checked={character.skillDeceptionChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='История'
                        hint='(Int)'
                        name='skillHistory'
                        value={character.skillHistory}
                        checked={character.skillHistoryChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Проницательность'
                        hint='(Wis)'
                        name='skillInsight'
                        value={character.skillInsight}
                        checked={character.skillInsightChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Запугивание'
                        hint='(Cha)'
                        name='skillIntimidation'
                        value={character.skillIntimidation}
                        checked={character.skillIntimidationChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Анализ'
                        hint='(Int)'
                        name='skillInvestigation'
                        value={character.skillInvestigation}
                        checked={character.skillInvestigationChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Медицина'
                        hint='(Wis)'
                        name='skillMedicine'
                        value={character.skillMedicine}
                        checked={character.skillMedicineChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Природа'
                        hint='(Int)'
                        name='skillNature'
                        value={character.skillNature}
                        checked={character.skillNatureChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Восприятие'
                        hint='(Wis)'
                        name='skillPerception'
                        value={character.skillPerception}
                        checked={character.skillPerceptionChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Выступление'
                        hint='(Cha)'
                        name='skillPerformance'
                        value={character.skillPerformance}
                        checked={character.skillPerformanceChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Убеждение'
                        hint='(Cha)'
                        name='skillPersuasion'
                        value={character.skillPersuasion}
                        checked={character.skillPersuasionChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Религия'
                        hint='(Int)'
                        name='skillReligion'
                        value={character.skillReligion}
                        checked={character.skillReligionChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Ловкость рук'
                        hint='(Dex)'
                        name='skillSlightOfHand'
                        value={character.skillSlightOfHand}
                        checked={character.skillSlightOfHandChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Скрытность'
                        hint='(Dex)'
                        name='skillStealth'
                        value={character.skillStealth}
                        checked={character.skillStealthChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <Skill
                        label='Выживание'
                        hint='(Wis)'
                        name='skillSurvival'
                        value={character.skillSurvival}
                        checked={character.skillSurvivalChecked}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                    </div>
                    <label
                      className='d-and-d-title'
                      style={{ marginTop: '10px' }}
                    >
                      Навыки
                    </label>
                  </div>
                </div>
              </div>
              <div className='mt-2'>
                <StatRow
                  classes='rounded rounded-sides'
                  label='Пассивная мудрость (внимательность)'
                  name='passivePerception'
                  value={character.passivePerception}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
              </div>
              <div className='d-and-d-box mt-4'>
                <textarea
                  value={
                    character.otherProficiencies
                      ? character.otherProficiencies
                      : ''
                  }
                  onChange={(e) =>
                    this.updateCharacter('otherProficiencies', e.target.value)
                  }
                  rows={12}
                />
                <label className='d-and-d-title' style={{ marginTop: '10px' }}>
                  Прочие навыки и языки
                </label>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='d-and-d-box gray'>
                <div className='row'>
                  <div className='col-4 pr-2'>
                    <StatBox2
                      classes='shield'
                      labelTop='Класс'
                      label='Защиты'
                      name='ac'
                      value={character.ac}
                      onChange={(name: string, value: any) => {
                        this.updateCharacter(name, value)
                      }}
                    />
                  </div>
                  <div className='col-4 pr-2 pl-2'>
                    <StatBox2
                      label='Инициатива'
                      name='init'
                      value={character.init}
                      onChange={(name: string, value: any) => {
                        this.updateCharacter(name, value)
                      }}
                    />
                  </div>
                  <div className='col-4 pl-2'>
                    <StatBox2
                      label='Скорость'
                      name='speed'
                      value={character.speed}
                      onChange={(name: string, value: any) => {
                        this.updateCharacter(name, value)
                      }}
                    />
                  </div>
                </div>

                <div
                  className='d-and-d-box white'
                  style={{
                    borderRadius: '8px 8px 0 0',
                    marginBottom: '5px',
                    paddingBottom: '5px'
                  }}
                >
                  <div className='d-and-d-gray-text'>
                    <label style={{ width: '95px' }}>Hit Point Maximum</label>
                    <input
                      type='text'
                      style={{ width: 'calc(100% - 95px)' }}
                      className='d-and-d-linput'
                      value={character.maxHp ? character.maxHp : ''}
                      onChange={(e) =>
                        this.updateCharacter('maxHp', e.target.value)
                      }
                    />
                  </div>
                  <input
                    type='text'
                    className='d-and-d-cinput'
                    value={character.hp ? character.hp : ''}
                    onChange={(e) => this.updateCharacter('hp', e.target.value)}
                  />
                  <label className='d-and-d-title' style={{ marginTop: '5px' }}>
                    Текущий запас здоровья
                  </label>
                </div>
                <div
                  className='d-and-d-box white mb-2'
                  style={{ borderRadius: '0 0 8px 8px', paddingBottom: '5px' }}
                >
                  <input
                    type='text'
                    className='d-and-d-cinput'
                    value={character.tempHp ? character.tempHp : ''}
                    onChange={(e) =>
                      this.updateCharacter('tempHp', e.target.value)
                    }
                  />
                  <label className='d-and-d-title' style={{ marginTop: '5px' }}>
                    Временный уровень здоровья
                  </label>
                </div>

                <div className='row mt-1'>
                  <div className='col-6 pr-1'>
                    <div
                      className='d-and-d-box white mb-0'
                      style={{ paddingBottom: '5px' }}
                    >
                      <div className='d-and-d-gray-text'>
                        <label style={{ width: '25px' }}>Всего</label>
                        <input
                          type='text'
                          style={{ width: 'calc(100% - 25px)' }}
                          className='d-and-d-linput'
                          value={
                            character.hitDiceMax ? character.hitDiceMax : ''
                          }
                          onChange={(e) =>
                            this.updateCharacter('hitDiceMax', e.target.value)
                          }
                        />
                      </div>
                      <input
                        type='text'
                        className='d-and-d-cinput'
                        value={character.hitDice ? character.hitDice : ''}
                        onChange={(e) =>
                          this.updateCharacter('hitDice', e.target.value)
                        }
                      />
                      <label
                        className='d-and-d-title'
                        style={{ marginTop: '5px' }}
                      >
                        Hit Dice
                      </label>
                    </div>
                  </div>
                  <div className='col-6 pl-1'>
                    <div
                      className='d-and-d-box white mb-0'
                      style={{ paddingBottom: '5px' }}
                    >
                      <DeathSave
                        classes='d-and-d-save-success'
                        label='Успехи'
                        name='deathsaveSuccesses'
                        value={character.deathsaveSuccesses}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <DeathSave
                        classes='d-and-d-save-failure'
                        label='Провалы'
                        name='deathsaveFailures'
                        value={character.deathsaveFailures}
                        onChange={(name: string, value: any) => {
                          this.updateCharacter(name, value)
                        }}
                      />
                      <label
                        className='d-and-d-title'
                        style={{ marginTop: '6px' }}
                      >
                        Спасброски от смерти
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='d-and-d-box mt-3'>
                <AttackTable
                  rows={3}
                  name='attacks'
                  value={character.attacks}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <textarea
                  value={character.attacksText ? character.attacksText : ''}
                  onChange={(e) =>
                    this.updateCharacter('attacksText', e.target.value)
                  }
                  rows={6}
                />
                <label className='d-and-d-title' style={{ marginTop: '10px' }}>
                  Атаки и заклинания
                </label>
              </div>

              <div className='d-and-d-box mt-4'>
                <div className='row'>
                  <div className='' style={{ width: '100px' }}>
                    <Currency
                      label='CP'
                      name='ММ'
                      value={character.cp}
                      onChange={(name: string, value: any) => {
                        this.updateCharacter(name, value)
                      }}
                    />
                    <Currency
                      label='SP'
                      name='СМ'
                      value={character.sp}
                      onChange={(name: string, value: any) => {
                        this.updateCharacter(name, value)
                      }}
                    />
                    <Currency
                      label='EP'
                      name='ЭМ'
                      value={character.ep}
                      onChange={(name: string, value: any) => {
                        this.updateCharacter(name, value)
                      }}
                    />
                    <Currency
                      label='GP'
                      name='ЗМ'
                      value={character.gp}
                      onChange={(name: string, value: any) => {
                        this.updateCharacter(name, value)
                      }}
                    />
                    <Currency
                      label='PP'
                      name='ПМ'
                      value={character.pp}
                      onChange={(name: string, value: any) => {
                        this.updateCharacter(name, value)
                      }}
                    />
                  </div>
                  <div className='col'>
                    <textarea
                      className='d-and-d-equipment-indent'
                      value={character.equipment ? character.equipment : ''}
                      onChange={(e) =>
                        this.updateCharacter('equipment', e.target.value)
                      }
                      rows={10}
                    />
                  </div>
                  <div className='col-md-12'>
                    <textarea
                      value={character.equipment2 ? character.equipment2 : ''}
                      onChange={(e) =>
                        this.updateCharacter('equipment2', e.target.value)
                      }
                      rows={4}
                    />
                  </div>
                </div>
                <label className='d-and-d-title' style={{ marginTop: '10px' }}>
                  Снаряжение
                </label>
              </div>
            </div>

            <div className='col-md-4'>
              <div
                className='d-and-d-box gray'
                style={{ marginBottom: '17px' }}
              >
                <div
                  className='d-and-d-box white'
                  style={{
                    borderRadius: '8px 8px 0 0',
                    marginBottom: '5px',
                    paddingTop: '1px',
                    paddingBottom: '5px'
                  }}
                >
                  <textarea
                    value={
                      character.personalityTraits
                        ? character.personalityTraits
                        : ''
                    }
                    onChange={(e) =>
                      this.updateCharacter('personalityTraits', e.target.value)
                    }
                    rows={3}
                  />
                  <label className='d-and-d-title'>Черты характера</label>
                </div>
                <div
                  className='d-and-d-box white'
                  style={{
                    borderRadius: '0 0 0 0',
                    marginBottom: '5px',
                    paddingTop: '1px',
                    paddingBottom: '5px'
                  }}
                >
                  <textarea
                    value={character.ideals ? character.ideals : ''}
                    onChange={(e) =>
                      this.updateCharacter('ideals', e.target.value)
                    }
                    rows={3}
                  />
                  <label className='d-and-d-title'>Идеалы</label>
                </div>
                <div
                  className='d-and-d-box white'
                  style={{
                    borderRadius: '0 0 0 0',
                    marginBottom: '5px',
                    paddingTop: '1px',
                    paddingBottom: '5px'
                  }}
                >
                  <textarea
                    value={character.bonds ? character.bonds : ''}
                    onChange={(e) =>
                      this.updateCharacter('bonds', e.target.value)
                    }
                    rows={2}
                  />
                  <label className='d-and-d-title'>Привязанности</label>
                </div>
                <div
                  className='d-and-d-box white'
                  style={{
                    borderRadius: '0 0 8px 8px',
                    marginBottom: '0px',
                    paddingTop: '1px',
                    paddingBottom: '4px'
                  }}
                >
                  <textarea
                    value={character.flaws ? character.flaws : ''}
                    onChange={(e) =>
                      this.updateCharacter('flaws', e.target.value)
                    }
                    rows={2}
                  />
                  <label className='d-and-d-title'>Слабости</label>
                </div>
              </div>
              <div className='d-and-d-box mt-3'>
                <textarea
                  style={{ paddingBottom: '5px' }}
                  value={
                    character.featuresTraits ? character.featuresTraits : ''
                  }
                  onChange={(e) =>
                    this.updateCharacter('featuresTraits', e.target.value)
                  }
                  rows={27}
                />
                <label className='d-and-d-title' style={{ marginTop: '10px' }}>
                  Умения и особенности
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DnDCharacterStatsSheet
