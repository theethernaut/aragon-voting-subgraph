// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Vote extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Vote entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Vote entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Vote", id.toString(), this);
  }

  static load(id: string): Vote | null {
    return store.get("Vote", id) as Vote | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get orgAddress(): Bytes {
    let value = this.get("orgAddress");
    return value.toBytes();
  }

  set orgAddress(value: Bytes) {
    this.set("orgAddress", Value.fromBytes(value));
  }

  get appAddress(): Bytes {
    let value = this.get("appAddress");
    return value.toBytes();
  }

  set appAddress(value: Bytes) {
    this.set("appAddress", Value.fromBytes(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get metadata(): string {
    let value = this.get("metadata");
    return value.toString();
  }

  set metadata(value: string) {
    this.set("metadata", Value.fromString(value));
  }

  get open(): boolean {
    let value = this.get("open");
    return value.toBoolean();
  }

  set open(value: boolean) {
    this.set("open", Value.fromBoolean(value));
  }

  get executed(): boolean {
    let value = this.get("executed");
    return value.toBoolean();
  }

  set executed(value: boolean) {
    this.set("executed", Value.fromBoolean(value));
  }

  get startDate(): BigInt {
    let value = this.get("startDate");
    return value.toBigInt();
  }

  set startDate(value: BigInt) {
    this.set("startDate", Value.fromBigInt(value));
  }

  get snapshotBlock(): BigInt {
    let value = this.get("snapshotBlock");
    return value.toBigInt();
  }

  set snapshotBlock(value: BigInt) {
    this.set("snapshotBlock", Value.fromBigInt(value));
  }

  get supportRequiredPct(): BigInt {
    let value = this.get("supportRequiredPct");
    return value.toBigInt();
  }

  set supportRequiredPct(value: BigInt) {
    this.set("supportRequiredPct", Value.fromBigInt(value));
  }

  get minAcceptQuorum(): BigInt {
    let value = this.get("minAcceptQuorum");
    return value.toBigInt();
  }

  set minAcceptQuorum(value: BigInt) {
    this.set("minAcceptQuorum", Value.fromBigInt(value));
  }

  get yea(): BigInt {
    let value = this.get("yea");
    return value.toBigInt();
  }

  set yea(value: BigInt) {
    this.set("yea", Value.fromBigInt(value));
  }

  get nay(): BigInt {
    let value = this.get("nay");
    return value.toBigInt();
  }

  set nay(value: BigInt) {
    this.set("nay", Value.fromBigInt(value));
  }

  get votingPower(): BigInt {
    let value = this.get("votingPower");
    return value.toBigInt();
  }

  set votingPower(value: BigInt) {
    this.set("votingPower", Value.fromBigInt(value));
  }

  get script(): Bytes {
    let value = this.get("script");
    return value.toBytes();
  }

  set script(value: Bytes) {
    this.set("script", Value.fromBytes(value));
  }

  get casts(): Array<string> {
    let value = this.get("casts");
    return value.toStringArray();
  }

  set casts(value: Array<string>) {
    this.set("casts", Value.fromStringArray(value));
  }
}

export class Cast extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Cast entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Cast entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Cast", id.toString(), this);
  }

  static load(id: string): Cast | null {
    return store.get("Cast", id) as Cast | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get voteId(): string {
    let value = this.get("voteId");
    return value.toString();
  }

  set voteId(value: string) {
    this.set("voteId", Value.fromString(value));
  }

  get voter(): Bytes {
    let value = this.get("voter");
    return value.toBytes();
  }

  set voter(value: Bytes) {
    this.set("voter", Value.fromBytes(value));
  }

  get supports(): boolean {
    let value = this.get("supports");
    return value.toBoolean();
  }

  set supports(value: boolean) {
    this.set("supports", Value.fromBoolean(value));
  }

  get voterStake(): BigInt {
    let value = this.get("voterStake");
    return value.toBigInt();
  }

  set voterStake(value: BigInt) {
    this.set("voterStake", Value.fromBigInt(value));
  }

  get vote(): string {
    let value = this.get("vote");
    return value.toString();
  }

  set vote(value: string) {
    this.set("vote", Value.fromString(value));
  }
}

export class Meta extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Meta entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Meta entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Meta", id.toString(), this);
  }

  static load(id: string): Meta | null {
    return store.get("Meta", id) as Meta | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get orgDataSources(): Array<string | null> {
    let value = this.get("orgDataSources");
    return value.toStringArray();
  }

  set orgDataSources(value: Array<string | null>) {
    this.set("orgDataSources", Value.fromStringArray(value));
  }
}
